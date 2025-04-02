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
    "25XgGZx4Dx2sHCE1Xcsw7NKLXPRGAyhZd1Wpaiu9gP6E5ihuFu1SEt1SB1mACE8njvnV8McCtgkrEVsMg91zF9Jc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NdD67JBfvSYFU52kFE5rEwQwRyL8bf5WWy3xMQFCP15pDy1NXxpfuVBj7uzkGPs9wewtuTqdvJ6c37SDFiYXoRW",
  "key1": "2rqeXMLmQnu8cogVVpUo6LgN8LqahWJFKmWidrf8dBcCLTypTZ9yoyJ5orZ42SxM8mnxJ3UeZgAyUYrJL2w1yCi",
  "key2": "5x41iMjfuPzuBEKsNX6RRsKKrwW8Tq6hgKPBynDuiDDi1BDhZY6vA3Uj7uDEBT14WJBqJJL9SQhshg1sBuVXEwxx",
  "key3": "5QGGLcasLicKY11toqAQKvDXAeDErAy8sDCcKWWzS5MkUXnHzYueQAXENbZh1xypFFWGXbmSoSpkeXH3quUp6xtS",
  "key4": "28y3vaFps1z1W85mc5Vy18dqu37UxfmVokkUJasMwiHoihK2GGu6SnzdoFj9NbYBZjpb4vDbHZMMnMHsFmK5gdaK",
  "key5": "dfhBV1VCr4pvqEtjXU4aeKRKK8tszAZueuDvaVtuwPPzdfuyZCmTVCbnkGM5jrvQLXfetEf8cufkC8zdsNv8Dh6",
  "key6": "aFh5BpJfqfYEZHgHESivqndwg8dWvMPn4dRZYKTiQoYgWJ5rYd6Nh3ixL819GHfBCxEDXeLLPEavJRuEFDSmTWQ",
  "key7": "2s8Fq8REump1K4HhmYDWu7Fjb1atyf2aqBQTFy7zm4qgA8mnsc9icuNbu5uEZitsBjuYGbMeUjhS6YsbszqYEvYt",
  "key8": "5DK6NfahpAm3pX5XWa4uhj8gjHsv2xXTjT8suah6voA5S6hwUboZadh5kzymKpNUZ3ZQc81TvsnHXoZFQSuXuDAE",
  "key9": "4nm4ijAGAAaFyR2Kjodxtvad51mPWK3m9UhBBr3GPVgm6LNDAzswioTMJx7ADhazGY6NMpZr2xonFtme7HJg3vt6",
  "key10": "iD15R5sFNyFUeXTcGUK91nuU2Y5hnEVSRjX9jdtmzoBGd2Zg3BakQq6SVgQXjCWwbnBntAvh24GwpDrQ5tqpGjs",
  "key11": "3xHEVoMdF1R1JGHUpBZk3d1ZWyUJ2dQVaCTHmdTTAzfaPSFonGeYYNkdtwQAGzWH2AwpZt98BeXp52Rsaz5RXFtj",
  "key12": "xXq4nBDfqbUFCNkpYA52QH4MV6H2ZrV167ArdYmvuLKu3Z7sYsv1rh2YJDjED2Q372ibgUX8dcQYhYR7ir1p5pW",
  "key13": "62ikGwmTn1nSwiV16HifvnT3pSbiDzvvupgpuZJ2pRU34cGz3FDvqaZcYpw53xFszLHEtxof5esAALUSzr7q7Y7c",
  "key14": "dAfYpG7bwvqvHTcSq3dqURz8kJo13yQLj14FhxNU4ASrgKoMjN5Aeh5QPQspWTRMyHiMHiFtRj7aqwP7JdG9YdV",
  "key15": "h5KWePL1tPr9ayZ1fBY2k1UzXS2NZjYjNRquHZmPtpGcdsqu7LkxmeDAnHaGFyFzKvJZhKQ8pyHVv24t1yUDaFj",
  "key16": "23mQ8HiP54oL8iDqtRRyNT4p1vjvCFKR5FKcFyzBzGxcJP1D6tTc2MXaezbMhfWzd7gZGDY2Ka89vYgh3fK9ufYz",
  "key17": "62UNrNFSSwpcK13prSMKW4EDH2xAPhykuDSu8aGYucip5wRp5NTvRqGADRKZEMegRmqA3PsZFx48HBE6Upwdt9nM",
  "key18": "W1pghYRwnpvPxYxevKEVf5p2nZWXUDPGxpX7QugyFiYJSS8dFR6abqrJ8xUHfWPD5WFYqXYAiLEkyZK3RVFNxgY",
  "key19": "4pjnyvpbGcndbipmrLuHAs8dXZBDatkraAj4tnbXkV3evoxzacZ8ZrYpw92dj4RxPnVXrDwTkZJPvHpadfdSG7ho",
  "key20": "2dogAyRSXLNMkctriqUhcFcgXAhZhYK28tLJJPkC2rFbkT8uPQwLLTNeMaX9DzjneSYfuh5RZU31K7NSKPH3vo8M",
  "key21": "5fCmfS9pw1g1np25xak2MbT74PpgAdETCEWCeBuHj8UiXF5RWDRU8HE35coQfE1Mu2cRFaz4o5k3fx84QtJyruUv",
  "key22": "44NLKzkoBsCC7byfXE7c7fWARPwoL7vZZpQQKHHLsHdmLN4HYWNcW1fiL8TgptNEmVwRgQ56ht4vyZAhbQkoczSm",
  "key23": "2aieurLzPJaTgpX1C6X4JwRH3rkwZP9ebCUAij1KzVU17ezU2qT9RrNiirSFhUTUyYRKW8tXsUfoqux9YArJAtN5",
  "key24": "3xhggMKsEb2fgVg5hKRPukGwXdAnNr46X58ZofDBTu3fWBVoz2TtLgS1bzipKcmp1Ad9CeJJ3AYdRBfBgP9tD4hE",
  "key25": "2xWtjaDMEReCqLEArsXNhtY4qSA71e6Hsy3fJP5KUUcaKVuFtJ2nLjQseZLLJGW58WchGi2eVXo3EqxjXa6c2vkN",
  "key26": "2Nt9Wmw5BsG3JsRTD6cLbFkQHmEBg9mLD9Fi5vCMfpyDe97Ju1YKEMDQ1rBYoNiBRQ6ksZ5ZQZ8wTcJQm9E2oKUw",
  "key27": "HEFbj4iRtiDP92fTVAHyDifHXxC2C18WNpDLaM3tpHHtqcRTCwYC3h2be5eT57DwjJpEDLHZByKYfeMqSoCFnss",
  "key28": "3QzqXCdwLL1fHMgGs5ji4myUC6cdjvEFWAo27j9MmtZDPJhKgKUnoGZiJLo9wfAo9AEh7gBdZafk4aG9dvDyyuKP",
  "key29": "5bZaTTqvufpxeW3HGEnu9Jwus4tj1FpJwVFF3eUVrjfgctMSPvPNjySyaffkCx6w4tuDGL7sd9xvPnrdkwt6MDNn",
  "key30": "3y21BrxqTzX42oDiQPMUaov6CwwgPqXwMLJFeWZ4DqePBLJpZ4BfKLBU7KcXHkaeuvuCRVHJGAdNaBvVLEJmhqsZ",
  "key31": "J4xYX3nse9GBZGmgJ5UQfWbexWEFnt6xBAGPNN3qDboka3eD8TzRb9rz8o9atywHSxLK4iskMCdBjRSaG6Gzd5F",
  "key32": "3KdUKWE5G4C3Qo1Y3zZR8wzPNjFXVDsQ2ptwDw6492WhAzfGfCDsG63cDJS7yZfzYYkVr7ncgv55QiEzbWqUwUDd",
  "key33": "2Tx4e8uZbATQyV5Pt1sFQmipT98AXojFcLucvWs5Bw6uaquahssVF6xgN7Q4SmQyPFy9bh5vnVpnKzN2U8ZE7dW8",
  "key34": "3R6GZQ4t5ErgtbVrBW8rRc8B5RSbcQj264Xu6QjP56hnZwXtdXVXdhjagJbz6FYmS6mmUMDgkNVKwZnVPuiWkyGi",
  "key35": "23KqXZfMgRX29NDmJGFpwABvMN1SfctGSDE6KLrvzrDf8Vy7wo9XA2xYao4mzVoNz8Uog619KG9AWU5ZTWawzjfA",
  "key36": "4yRyqi2amWh2uVV9NPmKgZjzXBMyUPMxX46fX5LjFV4CFnugwGp19YPd3kQrnBFNUeXLgU7mo7g9X29YpiRf9soH",
  "key37": "xDnd31MHE7dJzFcfkqFgRqfuHYMQxKpkxcc2uFviVze5htFRPbM1K9XxgvTsEViJXW2z3VaqLLam3c5Dd1rfzWZ",
  "key38": "QEoeDSM2EroaJXi5a5FArgNrWMES7juMugovPDmKA9imgNSVA3pTJP9xMkP1wf2eneMVNjjNBfFZMK1JgY8v141",
  "key39": "bmbYcgxXreTPX3w7FJEqy5HMRsTR7a7HyX5tAbJSYXrFVD73yXy99gZcXSuPeE8txaatFsFoVANM5Mmj6JGCHDJ",
  "key40": "2WgXq53VkEKnr513VMtijomRt46LUVkApguRhfY1KdoeksU1zW5X4J4rTsFFXXgFXuCUwC3QR2r9eZKVRzkvWKMs",
  "key41": "2rUWYUxe8Eik8hrUHdNqFZ9hSYfe98kKRuiRgoihvu17m4Xk9DJbZsEzJbMcFJdY4iuKg96QcmbTHTdJy8QgheZD",
  "key42": "2Cpcf1H9VjQdjVLhuBeugdFoi7ZGoSXvkf1HSDFjkJwdxJQGRvmM6fRgHMZAmDfm8LavitCvZ9rNj97cibVgEKQW",
  "key43": "3UfRCrV7Jt6UKS2BH5nfq6mjf8w1wCLueK4jKm3DXbAM3CoMshoDp5N2fJgQ128y9uHHTBmhCy1Eu27pCXHXCM2i",
  "key44": "5cmQiyb7bmyyfxqkCnXzfMdhiDjCKsyMifujDyo4hZKbCvEj9mwk7wFCiCC4CMpuwuRjfFiayQ6rG17BmmPRHQUy",
  "key45": "8mxBG4HgCimzLHgomBe4h8iQKm25DaW5wEhdfp6VyPRKQceif4Rw72ApDiqRtYJCPfmcqW3f949kQwYej3oMQPc",
  "key46": "5Ao8Dkt2RAtZeYsgVihvq61f2JdwCe7YaPUPMT7o13vHeQK5J6A7vwZB7LTYaqep7A5nSyR6xy2zgq77sL1q8cmQ"
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
