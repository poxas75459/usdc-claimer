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
    "3HQH58BT3ce4gMC3vG8afXuGD39sMLsP4kr9rWE7sZ2uSobZR6yUHUcc9WEzEenL9Q82uXzyAVMvbLmfVftKLGDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f4vgf2KM6ukv4VWiQ2mmbKcmwKSbzQR5jVRVXjihguVNmKtZaBTooeui2WoTKmqWvFFXHT9UQUpKABGyAfrqVBr",
  "key1": "9eERS2QxbYCGZEQQStjpr2GzBMWD2eTuMutRwhnfpzGCrcboCp5usELqrskru1gWVywDtUZVuZd5Bh21v8MLXSR",
  "key2": "fZ2higUcYYScDwNR6ZYXjmQfjRPGfuiihUmKf1CywgfCKBfJn6i2ttNGpZdf3xgQqwuaPf1Nf93bhiaZXAeGGHE",
  "key3": "3GawYRmMTM7ezVcJPLXU7hb4bf9M91iGaLDrANEXRZrBzdAMgiL5DgSyocnFkd3iM1Juu9tUTkx3cqfky38SeCzc",
  "key4": "2nBsso3jTPcFXYTavW8wwgaYefBSxLZhnoDcyMruePk5LKDQFXMRY1i3sbLkyey8i88jYtctVscmmiYno6qZya6q",
  "key5": "T3yi6jFy1Ks6tXZ2LSLd1h8vdXMQqJVo471PdhABpRAbDwAcMXovkTpCQLfB96QLsumwsCu1vD5Qowc9Ujk52zA",
  "key6": "2etsnYQZwzp9CSPjhxrHqQsZjfHVc3qur3c6fxGjaRQYwV66t4BbFzwjvrstMPcb3rePsDdquERHzkWMd19ktHbT",
  "key7": "22tyAgWXh2EVRsw7F4xzHRQPezt1Q9W7YVHK7RJyuV6TDNZZSVxZDwkz2Rux2BgPQpuRmzrgcJv5KoKA46W1AN3y",
  "key8": "Xs9jJnt7v4SaX6z5dkXCZE13bonLxocBPaikBSeL4CY44ErpxskwZHiW63p4wgtagjjaTGVw5yqASyTjz4Xr3cV",
  "key9": "3CinWNHYnbucsLYfypEFgqrAmxgzykBbpYn9TSSKiRZ6p8H9mghSVCRA4YNxSHEAnDwMRcAYmhefGPmBtWeqb4PZ",
  "key10": "26fMxBntx4k5AdU25TVYTEP1UL2kpSRuRUhWsphLGSgeP9PHP9KB571wVWenx2ZBptGAUNU7yXduokpbq2CsrAJq",
  "key11": "2TpuCG89S67RqA6nbzyYawCC4V2oHRPTAJNB8vCq7ZSSHgDnegJaZuovnq3KgmJF5MXFa7LX4m6wCgfKqNDW2VM5",
  "key12": "3NJuJzLcUidJ9eKm2Vqb5Vd7KsTuZWi5aEhwkpsXLJ2hJSeWTkWjeNgvWBwG676nkKrnSRPjddCqH9gwpW7a9LjL",
  "key13": "2efRazm8Ncuk4sApTbBLfTBcXQud2muHQxG6gU28BNeHVjQA9R9yPniBSdbhFcwmCtGR3Ncsstmq4o8SfWzBJDWL",
  "key14": "4unkJcauvf9qMLHH1XLP6Rcr1vKyvPJsw25YL8pZncN5VS8NEqDus9pur9DtHpacuh7J4ZsdryZgCJP8DbcVXx9E",
  "key15": "48crWVuGLTM8kupnfUJXED3SsEWLqCtagfW69wJx1sTYbzrwHMqkjdhdpaVn1HV8tn3mVVD4nFREWsXkVDWMffEk",
  "key16": "5qYrgmsWD25jURjjxhpxSCyuSirQwPAbWe1CpBRBqL1KAU9KLqGd6F6N5WJsq4i13RmL2adDqVtFL21v7w9dRDXY",
  "key17": "3WU1KauUEumAmdi8hYVfYdVLotM11ZVKptpk1m8dMJKsXV41vHau8tA14559XGJ2psVi1QrfoncFZvQEv9kFoFVR",
  "key18": "4zvUiQCJCZjXJTdvrUcE88mH2wt5RTtm2a1FKdjiz2oQFkxZ5jHRUDPJx7YeWwCTxqSCpkUfnGAVqFd2y79THXRL",
  "key19": "4PAtSj27e85LNvcjd2VEy1gqhdUjLtfMQN67m6ZUq8jM6h8AhUiJnV5qGD91J7efUnBgdaqjmgM2anrjQWPdHHHN",
  "key20": "3UjaoUAD9M1KrMk3HunK9sEwB3UJg21i9xcX3DJdfLaVb1vg2e6ePbpUMAcoq4P8rF3pfmNw3qqFzkn1R3ihePLf",
  "key21": "5vuxwrNtj8hVs9Wj1rmaXCwFgUpXWM7GPABFUCoEKzP1FWsSAfxn8RF5ZGMWUsLFeamYwJfHvuFGKvkfGRRTnpf2",
  "key22": "5LoyJ74B1heBsBVKFJ6yCgq2UKoYhsfprMpnfmcAcXHKxbhprn6CmpPEukKj93RLFR3PXkGhoxXwvMcM6rDByNnV",
  "key23": "3FzQpSGoBRQDu5oYs3SvAksosVkqiS4VjvBuFvGxwfPSw8FSh12Upb5uRqf7AUV8X9NSnoUtwVjwz69KLKvUxvSL",
  "key24": "4QdvcJ6iQf59G7FML91Du8ggH1QAjcVc6Xx8uLUeXLAnRWF7ZkzYMuydktsFkedDrJMQ5cSABBxmUcqm8RWH95xw",
  "key25": "2fPCxC3M5g9SqrT9h1RiANaSba6iYKc4SQL3K9uCUUYavMjLR2wb3cfkLd9f6qPWnZYdrPcLRgicTYN5tuzorXv4"
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
