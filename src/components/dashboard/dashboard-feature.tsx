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
    "66toGTCrmeFRXwi9ptFSWM5QAf8KJ39pFoomWc5yYGVnVD8hVkQhj4WcVX1JNGcv8HRVNndkbLZatmLUSf7MdX3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bYFJecRdQgzZSage2RY7FDJbSEKy3BX2h2sJmaDcyhU1qmNr7nfVahmkmrp1PkGHHXojBsgkUbzytVgdondpwtL",
  "key1": "eZURttuu7dgtF4mvCWjmRBjM7eUH2Kiz7D1zZgTyD84h5pUzjH6Exmd6fHLkZSw7Ljt47N2gVGmX5oPG3mZKQzz",
  "key2": "4JJ47ipdMgx1JGwaYEts12t5XdUKK5153rSCgKySVECCWykHLGnjnrWi1p8AeQD56c2moJMpZqxNwyGzwUDY8RTW",
  "key3": "56UpVWBSCFvr4ZfTtQyEqqqNJihiA7Rrb7Aub7NVjpzfpkU3CXEwfApaSgbGj8ThZgXAWwZP75ve7j9AW7kuZjh",
  "key4": "4JdQrULvJC9z65gB95fZWYkSY5PgDTrc8S4gQgFejKkzdQJ6KGx8X1Lu1DXPXhasjV7pBSzyy5iRwR2usyb92XBB",
  "key5": "25wAd4SZYSfZpaAWRcyqxV8PLVzxdsuqNszrrLkNYXfAXRpafCciDM4JZERHirNxfvCVFnRyzzzqRARMkh8svDDe",
  "key6": "3Stq1ZkMMCVeJESFNVVMu53bjPSQH96X6g6AtN7FApJbnJYkjhc2svh8Tnb1FpvxVgsSYW1s4es4MoQroND6fxdH",
  "key7": "3Qs7M2ATtVLEPnXKQAmCoTvFJLuSJXBUWSUHa7uxKFstaNfBZpJ7nHhe29U9Hx6qTe8LJogk29PrYQmP6Knj9Tzf",
  "key8": "VzpiArpdYrXzSUVLMPMgLYsGdUCeuZLTRRncANVAGQ8zFLuDBCpmCYLPtPiHoLaKyV71dn77fd4pav2SawmyN3e",
  "key9": "3NjtKMLxhzVM8pjHHtDXoE6hoMYNpNKa7amEWuBfNKjLYNL15XSnMJAdkfHfwBJa4r9ULZ3F1rbpLu6fPYrFY3wL",
  "key10": "2FjDdkS5k4Qk51pReoykgxJeiZLMoD4UkEPdnfdKvpc6DznJDWxsN19ZkCYQxWxJWHZ4mpFaog8YNEBRhJ6RuoP2",
  "key11": "4oiVgyoAzUhD9aSCndzoNKphp8qksra7MXjA7Wts5tRTPfTMxyXZMJKjbzFGMjKnjzRQaRQpGMDdPjyZCeCqvATC",
  "key12": "2qX74LYhEnJQeARWEVgZS8GHpVuay9e4xNtdqQG9LNkhY22sz14bNqCWDCwmrENXsue77HUu6SB8T8VTTtPmNbY",
  "key13": "4wPaTs7txGVxsiWedCRsyJ2qsmHThotRXVCLgA4FiDJHBx6S7QuxJsNp95EtKz1Wc8cMoJpgNN8pRpXhjpU6KHUu",
  "key14": "2H9GT9X2BMXRSL9BqiqXXzwB4scnM74ZqE9Ysy9oo37vYAGZ1wgL14CT9PpJUW3Nac4sL8tm8bwqK234935rxkkR",
  "key15": "251u3h4Zu1Suzvih18Nf2YswZdn46VNiwsi3cB8SLPf7EWRJ6X5MN1NruqfsdvYNWgUM5tZGGwBM4w5uUCKUNv2X",
  "key16": "31JLRrEwEQWDS7K6M1ByTTVUxBUu2Nmj6Zv9qhdueGRaz257xL5cSA7XhZGWme3WSBszvsGQWTC4BGKQQoGzevvm",
  "key17": "2yAZj7eC2FMoojXBXrGtc8Q7kFUHmbbHMVDtftYpyK8GPPyQt1ENADeX5pasnjCRMakgE3CiudZvZ1w3uTneJDGi",
  "key18": "4LtYuJVm7dqCqAW6YbiiztyAz8eWsnTSt8xphohamvuHxwfoy5X4oH35DeVyTtskEYbeqaoRELCLzpLmp9aYD1XV",
  "key19": "3KCfCGC2BtAhR4hUs3PziGMHMMADzkN9mgNuVZNTmBdbUEf545PPuycBFmx97WBbpZAuKN6aVJwPdDtvZGGrJbsr",
  "key20": "4betc1yg1SK9z1cXkWBrgiKm5UiXRspPzxN4otUPEq1Bgnw4smnpPjpekYtJVrXhD3YSWzbHDS8LqTKdJfNJ35ce",
  "key21": "5VKDxYNxDpATfMtSwPr4UD8oqyJx8BwmPQeg6uWGbiHUgoLa3RRwHRnmLgmFxd1DNC9q6YDKRHBQPGNd6PLX3bwe",
  "key22": "3gcmPnKAzKJtpCfLsc1TXnyX3kQqhFfr8PR3d6zhqQwZtuYd4yPeS8ww1XtLcmvLUFaMngrX9spXgTWXDyWgvuBm",
  "key23": "3uf8Wcdpb8PMVwLsriuidwRkLFzCzp1K1v2fLr3kroNBY5eb7vASTwU5syqEsrsM5THAKJLTMfGUJjYuMtfBJJ22",
  "key24": "P8Pr7h1Ks9oXB9Q2ePNaiJadALWyDMR928duaYxC9isoYSE6xZ6wcZfFUzZP9VavfEBvi3vHev7pdt8ieaV8D23",
  "key25": "9q5BAtzJd69QrucQafEa6zL1EjEj1Zb7b5PHbumMnmTWrcZ9RXLnh9WVexSD8ftjJz2dJTeCyd68vnVqq4gQs9a",
  "key26": "454fVX3j6VtAgvwjwcuNTZR8ro6Uy1nLdmNncQbPsi9pT5Mh6r43dkXneMVN7ZJGZyoge8pe9CHV1XCTuw6KUB8K",
  "key27": "53tnyPEVJM9kMVxfWNy3ArexuRnsGZe2Mo1eGc1SBk1PYFaGjsmxi2CM2w8juq4TmSmZDRzEsvpQLm7XhKaycFse",
  "key28": "2vJHSApURLMzp4EQ7da46nFQmfLMcuCtRHkyaPccYSWKYJvfRGSU3dqY6cVtKKbMnMguJChMHxuRH4svypGKWfLm",
  "key29": "4WpAEVxJuiMygrHdSmwa6dya2wW81ttXNsnEz8UTGCiybHkVqoVSCPTrzQgWnwwmhTj9hXfEEhqZDFoxGF5g9vur",
  "key30": "myDoEkPS6tDgkWvBc4MwurHrfboQuxf7jMh9NZQHCLhuHDzynu3mnCpv7aHsPBQ9WXxEEWb9bzVXnh8Jw43vG7b",
  "key31": "2eCTFbNXQX576xX5epv9FsoMNQWeBUT7VJB6SDnzXpd5fuYjsoEwRZYKZsoe52nLTtri3Cnudk45wAq1wFrXEBVh",
  "key32": "55sffkT44fxKNYW25YsALvbo2PH5k587ySBnuut343pFsGFhDuKj1bG7x8oZR2ysDnHu37StdRPVsMx2wDqzGhsp",
  "key33": "EAQ8ftXqyW8bziHcfq2iq714mctMEQjdTKFimBGYH4R86V57jzjzJ7XkLWQdbWAp3rS55cRcjVyPA2jsL3qbuwW",
  "key34": "126cxjHMtvUwYr54tJyZnVPAQ6fAfh2XruVWKRDCqbWFr2LMbWt6NuRpyFxySxH6xoR8PJtTb9GQABhy1oekcPTE"
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
