/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "52hMvkuh76mC3Fia3nGHEQEF86BmprnPLFsNo2yVjapKFW2s848CRRjJkCmEQtbFP47NU3e1jVi9VWSbGrx41Vj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nunYyhhei37tC3saTyY7a7QSH1WKkbu9iTvY7bnCftvNyPc5y8F7vn8TyFQYVkMxHhVGN27TMzkBd6m7fjo5HEH",
  "key1": "3q9d8rBmbi5MwBuzbz728gezWsbb2r5zu52d7hVYdcMJVoDsTBEhTvdUDx6u5zaoom1cptNnVyr5jHZb4HSUiuw7",
  "key2": "216zf73KiZ1eFnB2bdLnnntV1RReGEUSNXcMyNmxj6XabvAEgWFyQGh5VdjKJJXf2t9aUCvm4uW2D1ry68f61U8e",
  "key3": "5z8NboTQYSMvB57aBuhNgpjEvhTVjhWWa9Kxwb4XhNSnTfSgeDonQSrMzzVv2iEr7w4XrMquS7U4VZrqhrmLots2",
  "key4": "2HuPsHusmHJWfczEvVVEhqQ2prHYGLnHzDJstPQcDYQTXAEKFbRN5TTqYtQFbc3873CS7tiqJNYWzhx375j3izVr",
  "key5": "5MgXTBHiTziVtgphHYFC8otkcSCoCLPrn7jxWmLobdpKz6Fph7vKe15bt3RgDkXPLo5VZoWQB95CsoCkFQkM6LRW",
  "key6": "5VcVwpTQFFtsWNkxM9hrCty3FEzNEa8YoNM5df4nAcCWKPnA1VNDEZvUD3JBSMmsb2HPincaC2QsFigZo1BeAN8b",
  "key7": "5bFoR2QnsQa4KWtCHjceiZrGgbNRXCrzukvNepRzo8Lh7qDbofZBmZYC4oQfPPRcGPbPPzW8pDrmrbc2syMnSBxu",
  "key8": "2cTZNtvsVgf7xBGfM8uEKQxoW1qqsVbeNB5wgeLYF2hGWspdjP43Ui9sMeDXAKimBwgLUrqrGtZuGneLPxX6Uy23",
  "key9": "2CvvUH8K66JHnKyYc8Fvd1A1PgYE6Lw6xEuKQ5xU8ZyQPAEy6c7WM4szjLxufgdV9QS6zYcq8f26NfuXXgFH6HwF",
  "key10": "WGc43yk7iKijJjRraaCxHGFZVRD2fzdTG6YuWsCWoZXnd3uqvJwFJuKsSSAT2yG1aJcW3Cz44GLBXnmcEJ7vjhd",
  "key11": "579WWe4YkPBCiop5XvWcgPkqPQdgMNJwbBs1VPDDvWRFz1UMvDj77JfbhyEiFH6dAetFjNzprxqWEQiBFEsPxyF4",
  "key12": "2uNa9giLEZBNtfwJLJxjnvrUZtKShTftE3jtw4nZGpZAQDgchx2nyM5xyqawhcLkFjktYyi9unJewRqKFrGwTqjm",
  "key13": "5ZuGuPwWug6UGKTfgt1ehBUEm46epTDWcLcSmVEXPmScV3JrL8zyFNjBL66u7JoLDtgy3U7PTsen6P85eBoZw5Tx",
  "key14": "2LqZzh3JVypHH6wWzRMJQxkJY59ZMsGpaH8B3aLpHu2BsJoQQhDGRFK2fRLzURa8BSvz93bXsLjjxY9ZjMwdtzDL",
  "key15": "32kx7MygpBbUKwKh4uJwvTmjSSS2GWqR4hePPuBseLjY6GR1TWU2MF3iT8SpuU2eTXKLaG9oX9pixiYSR2X4DHUD",
  "key16": "3xA6eHjVQfUH2wnwp7XTo6ZDHcGSv9bh8Pdqf8riEhxp6zAbXAzmiijnZPojqvo7HTaqpNABaFBnspscDw6x979x",
  "key17": "2DtPprv4xHokgdsLg3SsUe3MEVv3TwHTTib27QkDSvfntazjNbrU5DF1VzRdUraFajG75T5bNqRMvWG5zPrm1HH9",
  "key18": "4oY26DhVmfJnAeCjvi8g7dRJbpXasZMsTuEjZyX729Umjou7nokEr8SMXCkv4TxjEoCP8HfHXpAW579XNVEdUnED",
  "key19": "2ZiFezjNu6sRBQSN8otT38Bzsm4mM7p45LVFdwRjNnCCq78RRLWosLBEUrvpT69LptynZNpEVDxRh7FHy9sfuyLR",
  "key20": "4zquLdEUqJHaMp26JG9TpvA3SSvCPViTacmMZGEXM21UdKuPpG9vNYW7yrFdPBkAsEtJDeNS5sosJ2SxgzJyUbbB",
  "key21": "4mna149dqta9wX81L3H5DigQt7tNKq1J2k2iNukddbiZ2TdAPTh4Kj1BzBxE5dMHHvXmq1Bgfvy1jrg2aWbWPyMr",
  "key22": "pX71z8RqvFJKpc25jxyXd91YixEboKwW3ru77kySTDR3qFr7G9Zi4fpjk4R5FKJ8jS2yTCCFVFGDjQEqHJocmyT",
  "key23": "3QrdPD9o69WgAfngxbkvZETqamng8WfowQN3e9htikhmuf5JQY2TVKX17H71WGaRCQjKbqDDfCDifCYvhKXc6VoG",
  "key24": "5nA3FvPf8gHfg7cAzZLNY3casn6euL35Tzq96aVC1NehD6kaoiyG57WsirUdAoyZ3hJZw3x6zpw4qJjPNfxPB3pK",
  "key25": "2A3yUoCuT64rNZ4exbDJ45BKdCuFcLt9FPCNPG8Vvv7ozo3GKSrjjr34fukYMCifWrJqmEL8R9KH26cNZXbA3zCW",
  "key26": "4GWRTemW8Esfkd8VzcdcBVUsZehncfoCQrUyzPne1kRLLpNvKUwZjphU7Keehr71EAyEJ4d9X1f5RhZffgJNPaS5",
  "key27": "5zjrH9LUayLfGcxtDLgRQjW4cCDQTDfiHNcFxt1gWp2E5iVxSMueF54c2ErQ2JdZTf5w8dqgkhYEYcDraQSBZCYu",
  "key28": "4aoHtgv4hAyZrSm2SE1qL3UcXkJqDRzwNQ32gMJYBwNGzdVG3hmUAk51xEf42FzxSb3wzwchT3xp95FePLeCPNFu",
  "key29": "5RwZAVFrzM4rurwuWT9hdufm85YyRN8hvrUvV5z1a35mSnGsTRq7Zb262YSxmAq82btDZD2eFrUeJMMjkfyLEJMB",
  "key30": "3W9zcRKVpZKcXx95yKoN7vEMokXGwP5JY87owh8YLobFtHQqqtSasjpB3ELvUCQJWaretJRepBxjHMuwXQrYoXnU",
  "key31": "2AyAPPPfQ13pgK9GwJTzkfPJoF95GmuaH6PYHUJ24MAs8ifW2zFNDMR3Z6ULe9a3KFy3i6mNYmrFn6BDgVp4GSP1",
  "key32": "54Vo8L56zBmBxTxLp1DYrtSxzNZ1Z1jjPDyRoKMisa7BUXt2wMMQ6PAMQ9qXt5FDZJpEWGT76N6UvUfbMBBosZrR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
