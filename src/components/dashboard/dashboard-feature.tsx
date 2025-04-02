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
    "43Spz3xhNKwYdAoVirfaRUHgdZF6X9wHP2UmxSyoSRskxoj2n5SKKTQvT4qv2ZqHn2VTAbetzVtK6TmWacd8MbWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5scYGyPPcmivfhVcGdebWVP9qNuxNe6Sy4mDr77X32ZpJDuReC53SdgSwcPFViPMeCe3Pg1ap7DcKRYqxdb8KbF5",
  "key1": "2FsT6wAk9Hx7hf13FayqsHEhq1cEHh8z7shK76c31pvnxXjThA5LjrVymeT5nUWnJNaZnh2hWedy5eY3E591aiTE",
  "key2": "25oGZmsXkgeZqxxQcrHjGrSfRSMGNvDu76f6mw8DZgbSfb2NnKAzPb72gYUSSELgsHbLnLmhz9WsVRzaMk5coiUb",
  "key3": "4q2iVAJTH5R3anSyzP7jCjChhAFyHyUxqEsUz3KFkmSNS43ymScBT7Qt7m6z2MzCAKU5fL62qGruxQBHbseyNjwi",
  "key4": "cvVAkj98c6aYDBLxTeFANViyEqFNSS3fPpsNn1Qjf3rXLKjGjuR4q2qfAkiLMjDp4ATNLp6MPm5XyPaHvgdxtw7",
  "key5": "2GhEQfJUPBaDo9Ej4fAj6qzfdsKGm2as5mDrrHT8TBSeRzT6EXN9EsbBwQLewCVgK5w4BvpjuPNbbPrP3BXDedRM",
  "key6": "2fG7BHkNDryRVTsDivyppfayDd9DxLxf6jzBGmAsx2tLaCVKwK56zTsVZHaU8t5ytUHZvBn6NEJeavuwg56cgQ9u",
  "key7": "462GMwjfNvyi2z31fP2UpgtMJQapFenCTS5KQ1TrDf2bTLyDm5ztBBKPttTMZPYaM3c5yjBXZPfv49yg8v8LBH5V",
  "key8": "2Bn3eiYjqfM85NEP4F9dh8zy6yZ4Pj1hSjXYyTTd4HP1hFFvAVNipmz7bFQiyzXMeNKZcukoDm5jFMMDVAP6FV8A",
  "key9": "5borfRZ48qBJLYkgFhL8hHvW5GDhGnFZsgXDwTuAfUf2wKZyHK618eHx5SsPauM1T9tzU6s6H2vTHa1DMXbDcLRB",
  "key10": "27qV8bpuYiRAcHLrkVDmkjykaAXiXZsTpc14SFu52Rc2EE9zPbVJQrNzsZdo6o5grRSDNJGGu6Zycwvjs9EsFM9X",
  "key11": "3bV5ks62MKXhzS4i9D3oSRFAtv8wVgPK8KSrCuBnnH8o1ng3krXbQCXV6aZw5pRv1bxRwJ3Mmz1LuP6z7etPTLfU",
  "key12": "36BzzphwxfQEdnkPEw6d8KJm7d7zcJx14v6EMtxgXhKBXVRSsUQNCe2yxVqvRpTNJiPgkzRRdDfRM7FyYSPwMfTK",
  "key13": "37mm5xkWyBxYB76YSg39nw7AN1tnoMm4M9M4ZTgaQewhn3EqtyhuzjvK7QVCmJqW9NhLU16u2FnXTUkxLaXLoXxM",
  "key14": "3AyyEKCo1vCRFYtpH57s5h7DpM1CeCFTmyUm9Q2xv7EU86jkiraDc2sSRxk1BzBEW28fXxfadcJprqXuTyaoLVzs",
  "key15": "KGkLeC7CVLcAWhtQP4bRDzvZjV2RhRVEgpY8kPKFRds8ghKZfyS6heR8uMgUCfH9YWUX7KJ357Fi42T43f6JoRd",
  "key16": "5hmj4pS9GmQNQdCiEUjWVmDAekLN7C7EUd76NcfmeuwjfBSG8wTcPW2YhNq1TXZCxUhunbG1ANVseKZj9j1EdkkT",
  "key17": "4rd4mhorh3vKR4gaLch72aDUUR2d8RhUNkA3jCNZXiGHYAzZbTdNJY6RzRzCLnd445vPfCiNZ8EYaxmCniXqMJgS",
  "key18": "4e7NkYZ23WtG4FBfA7tX1mP4VbUJdKT7oVCeUqpeXx7eSosPwZGAN9tj6xnLVt2FirWayffQTFB6vQsqAYLGc5Z5",
  "key19": "52G8BgmSMtwLLLoEtLini5t7jctQGWFra7fCEWL9Nan5sm1F7twUCuUExmUsmWZP9WrghEKuhswjFipYaEYZvHRA",
  "key20": "nTnsaudCbFZYSaWejuf5guPFMsRBLiWmFv4SHAakZkiibZ6nKPa5hgRqAb9EPLvXAovrsPhPS1V8L53UNh5Leux",
  "key21": "2NTZMnnmte1txLyjH5xFh6nFXfxAdi2vWFfVeBbitT63WegfW6rhJnXRsFZAs3LbB4G1mr7hhDvh8VVEZb38ptyt",
  "key22": "3sbijsShkJvTgao8erCRJdWtuZPNxu5CiqUgVNDWHcchoS8BrXcr7WppntXQdURpk9nr1Nf8hXWtGUpceBf9qmqa",
  "key23": "26fvH4XEL1VxkET86tQ4W5iYY1RWkunWRMjfQgaUEGzq6uTaHpVu35eBaSWtyHLFJ27L7FnCsULBhEF3w7amN4q7",
  "key24": "2gpUWHFTf6cHK8aFxY9gDEUNfRSd6ckJi7xmuDZcU9zRWcisSqPfQiKbRUCeKwE4XEsobRhkVGbDAtCmK3AEDAe6",
  "key25": "5CMBETBZuUSZKb795wgrnPALz5x2QbSS6NZ2qoHSUybRnpeTExRm2EW98GXt5vyM5cHd4nyk3YooH2Yiz8KBF3Jn"
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
