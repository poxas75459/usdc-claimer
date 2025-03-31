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
    "4KtWMYBNsrsvD1uYYWJWqW6FjgJSPi5sgHxnWnisDax6PSNfivnGrW29qrS2i4kSmaCM3TznfejL6hNi1rn4mL8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gpgfb6G3SiovQ3vR24bUyYR7XVUvF74cV2c1aY62Ta7XXgeDf1LDX3ZgFR5j6BoiCEY1XsSdXcPVwDtUvzp3gqu",
  "key1": "cWr7pDFrprRcVMt3bwUJrG3ZKEieavBzh7BvFkCV7i1moLFzZDZk66CsURkXpLCCTv1VVX2VQnjoxbXJPExpFBn",
  "key2": "62iriDQk2nmvmS5NfTuDv6PEC8DGJyx1wrNLdAEHiRWBm1gQW7J8y9PbUvuW6ne9i3E6GmNqpYKDx9YgDEARQAdh",
  "key3": "31Z5mhKdfqupCdnxFK6i26xfjuNQ4GBcftiyCMUrv2CibZk2YWGcGmLw5Ke5zbaZjxuamkmD7DGMs3D1xeJCX8aX",
  "key4": "3ZSUncaCtkAKFSczpw91vE8YCY74CcGjBztsTMnd2RuUxe4CPQJ9wwm5e4tMnYzeDTtU5UDFUEutVQNVoYKh9X7r",
  "key5": "5iR6bw2R62bGxHws5kKz3XuAG7HerAXK7z2srTsekcoQLGPBtmmx3k2wQaHMVj5SP4idNrEa5o8CU984U7ZwD62g",
  "key6": "3f1amYMRkS8rCtcKhrptygCf2rLrW2ob6K78GSmox8nmEVb6jKW2oCy9nA9hjSzcUsXv1o6xnaUSsyJEXz3YoDsS",
  "key7": "3uQrB9bquP84N178yoiUY7BXrZk6xn3nr9C3oySjVapnuRD85eVUFsyZsmZ8jwb6zJndZCc9pafxAcuyC3aznZcF",
  "key8": "2KTucFsL2hseZsXomdxyUqVvLuDDmTHrRArvt2z1kud24QkgFCF1UdqghDU13ejvvoDzqygYTeiFvCDXVc23EmjF",
  "key9": "5KDpQ26Gdqf97vczzHFGgFWsTgXMJrpjBYy6G67JjofKZPREHiFqnWEwSWw3bkHmxNZscZsvSoqNAw4MNJzWNK3a",
  "key10": "2CBJz1jN2Y455dBXJB8kMZyK7bm9YSfvn4PohUFv83vgo5dyyDhRLfH1Zr6LnG3efF5hNDSGPrLhJx9H6HLkMu3j",
  "key11": "126SVo7U2LcJ2ec1dFbDw7v5XDbuueqA1XkQyujjqq4Di9WGsULF76RrHCw4SFVkrYbhqxXWWhTrEKkFUgSG25TE",
  "key12": "4XkraTqFQXfHiEzQmtj2sw4buPNBHm3uQAziEomheZs639TdEupEsLgH89YzqFSfcErPhtGSw6eYV4MPjYq2AAdT",
  "key13": "2TE7igfRwD9FzNuZwVAjFGFM7QTYPKNyMPauo7SQg8TzAwTfutT8TrA7FnnKdsd3dA8g5VDrwGS7doHsEyK2gvFc",
  "key14": "xM9ZuS1VFe6VEbP1uCRQuaeeEuC4tZXMBWFDaBZcdKAZ1NjXjWL5oZWeXc5s6wjto838ustNCuy8oFm7p6QNPz9",
  "key15": "4bWjWRFNbgm8hw9mXVtCuMXsVFancDD62DBX2hNd776d2t475E7kFLNSP1xW9jcYezKpLEiT6WcwwZYNQjvmiegs",
  "key16": "4UEveFtKAs19FHVYsGdR4cwtuscLUBisinwbimSuYewVqJ8oa6gMXwwb93EjsH3azDmRk7ds1PxxkUi6uY3zuDMU",
  "key17": "5ikw5Uuzo5G8aS1Mibwjq3soEzucBwKTcgrBBbTfJfUR4pDkVigpq2FrBpSdFseeJ5dm6xhC9UAqagPaMcMdr8RZ",
  "key18": "4PMkJwU8dF2fQZvLxVp66QPU25a1AVomVEPSEo9XERRK7NopYwhbWUWiMsbtnELXm5V52T8sNNJ967P1qqdRn6y8",
  "key19": "37uYZfATMf5i6F3XGTuz18TK878SNojYcAhRpEqb7TkJLTFQxLDerrzG8TXBiwLKKybUHMC8vMAhVJgLq4AA3SfG",
  "key20": "5Q2SL8PNLtJeZZi7ENsXsxWWiNXVyTkYAeXGYXgw3Dd6FtfZmpDNYQrdMbpoUC7q6m2vQfqRjzdL55hPsCyqrpsc",
  "key21": "55PMGMKaHCjDukth7NGCUAkCXyZ4hta6oVCSegrnbLrawS8X526RLeU14krp8XDWtMxPmmjkQ3ZFaTHkdspnBYo3",
  "key22": "2q2W9GfkcQiPeQsTqv3b4pMo9TPhH2uV3BFZnejj6Nepk5PNMNSMXjyEeCWtc5NiXg3Gp4h1R33PCp6gQnGXccpy",
  "key23": "2ZXEVDfHjbz3NzFhHQa48ZDpEzUWUhvPW59CeA9Cg9EyCd8vto1bvBs4bC63tyRVKrPjYTCfivF3fnVoM5BN5Eb4",
  "key24": "4JEKTxQmXNpStWabsy2WN9yz8EANM4sGwfMaaZxVeFXvADeVt2W3RwNyA9Te3q2ifg5uK3hFW2CczbH464k2nzFu",
  "key25": "4GS36edR215FVdsB51ZmoPS3RADRW89fdBW3YFgvdXA3Huf49CGVp8LaWEwFZtPDRp59GM3AgbjHkp9cthh99m7H",
  "key26": "b7S7BMykJFjDGKjKeJjcjfcX9y8Jd3aArgZgAKedaoxQadJVvPHXTVTGbdqC3dxEE4QHmBfm1eHCYH7HLqJURWp",
  "key27": "2NGkMxDtpFaGzYF6wFhr8E4UamWt6to68zAESfYwLCbNUeKDvW3cnX1oYhJ8i8vbcji9B94j5VQxJXhvMivM8ojb",
  "key28": "41cU45MoSNZJ1J7xT5rKzD7s3pLKm6nFGxk7o29G5F7dppsKruoeLTYVz8ztn8J5YfYCzMfnq3mqFgfdeUhUthf"
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
