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
    "2177c4GSX9MSZFeqcPEeiwB8N7GRq3eM3UuwWPfiPGZX7xEMnrXEGChdwZzVYUd8NHMo4t6L9hmj2VPqBnU3vzs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XMpR5h5TfebmxyXSnE1686JPNu5BMarHw1ue7SgqryytPXXf9rWLaF4eQxdNnfYQ8csAjdiGo6uCZwUiS1y9bd7",
  "key1": "5auz22Ee1aqbDJw3nF2RyoGScAoFRH7ibvFcBBKpaqJUJt4TAXYs4ickRL7hTcYUQsm5BKTVw7hpZgax7ygq7vJX",
  "key2": "47ehiuXbax8gH5tcYXrL4bupdUckeXdFGDa8L9TG8xTVnXAn8kM6hDwxMuW3iBagmpfQqRyk6cthmeD8MRaZnLfW",
  "key3": "3APg5Z4AkLuJiwSpZMJ2qq4wZmAgJaqF8XYQEoh2uknyy9bH9AQW6LvogEB2RyUByWqQVRq9AkXG1SGJZMNLJNeJ",
  "key4": "BcFeg3xSX9NsUgbhAeNFGwVvivR8tFCEiFkmw7VgnuBsxT2V9ZzPxEkFoZEDdhVXWHGEsYwCXEsFGVjunHo5Mxm",
  "key5": "49gb7KtNa36vnrG7HdgMGHTMCnXzqy8C4X9hu5cy4LwQqzbfHCh6A3SHd7wJ46eGDH8mtursGcxJ2LHL9BhmPocK",
  "key6": "YuKivC7epzi16xtwwutZd7ozFWxY3uHsqKbAtWkvUFUqekREhfk7QX3PH9jJVnyh5iGa9z9hAqm3WpispWK561B",
  "key7": "5umT4QtTnfi2on6vjwxTJLASmPZo8oS9uTSVHUP2YKKuT8NAYukwj2VvR57qGrNhBwcRb8NgwPMbZSNCkRWz3Mi2",
  "key8": "5eViQbUCfBiK1Wc15fzmbRT3msqV85fJ2Er5YqF7qs2gVPPjSFGzSQuL75zhndgPHnpPnPRN4vvomgtJRevnQXa",
  "key9": "S7B81Ug9HGKhsYMzedZoUzLJ1LTD7Cy8xE5PPRfwjUXgbzEhDXTeG7CmaxPz8BygRoMdXt3WihYFkUMR6GGQNpU",
  "key10": "38fUVhmc2fzenAmTCf3T48sFFQqyt6yEtRRAUaLSfAj33ABXspMaNKFT1yXa9k3c31qC9kCNQTeNkEfFm5obkPdA",
  "key11": "ZaQEvUy6o2QEa3VJZGauwdM7qotqbxGnj7UQrtk13g4RJx3dNSd2S2xSecBTGYzME1hJfnfrwn4Sgn7BKEei3Ff",
  "key12": "5zwx5YGYdSRqLXvnFHcdzYDehKaHc5Saojw3TG9QsWGDd9SdTHNFQ7joFgH1eXykCm1aGcHAUaD5TtHaVxi1zjan",
  "key13": "5gdLFpFh4SJ8C9Y71xRpMeqiyLTToobZAhahL8d7gPEAqZwCjJQsSjuDj7KTvY9atiLmBGsq4K3qZGZcF2yNNgjS",
  "key14": "3zRu4LAKCgQKjPnBAnt2xS58kgsCcCbQb6fJAA4Pc9cTcyFGNRK4dMvgKoaVQR3gJNkLN214sJ6MtnhDbDBr3jya",
  "key15": "3igyJbKDkrjnSx4E5SmFBaS7ozHZo7Zt9KkRvXEHw3wFv82vz5UobjJCR9STXWeN8jHJFw4FpJsBSneaPU7Ri7ox",
  "key16": "3jYdSgNxgZnrwUWk15Csmv38rDjfQc7qLnNZFpVT3KW3ZvznydTx6mzowfUcSEwqbzotLhHfcDZGJQPg2YfxwHZS",
  "key17": "2tgpuHV76jAexAv5zrxJX6pv5qr2TnaNBGKubjKP4Pfw9t8pDrwoWp6FWkwR6TT14fVD5m8HuuXHgNTneTfdWfgA",
  "key18": "4LxZhsdUe4T9WboyrnzvSrkh6kaj334kGQ3ZMcJ7K4EUChREDqGwLZ695afT6qZdqHEVugd6E7ct4gVUDN4iPwKS",
  "key19": "TDx9q7dSKUMUkrQnWYkomCESRg9mgwEAns62sN1z5Ns5GWVprw9jLow3Exh14d2ibgeuCDWgFgHqX1HAEpX86Z5",
  "key20": "5b8Fy7xEeoCBjtLT5URyhydKRJfv8KMEZLAJamvDDHa8QgQ4EkBjKkQHbzJJmDTqZo9vr9ecAWGEDZXy1isVAtAv",
  "key21": "4HvzLadLq9rSRH4pSmqrxSYZ3vmMiggG5PQPJEp4x134z3ZDzDqHQcLDiH4u1iaf6QPBLfT72g61TmqT3J5APt5d",
  "key22": "2bh6gKA3mUqXSQb19sSrHfH1aD5cvNcnLpSSzDxezJEboRudKCp3Vt9jKr5DJjjfR2bRTPGq3WfCnbYYuuPLtoT1",
  "key23": "4hS6qdHbmrDf5nTn6LAhKV3NfEESSbF3hpFZ8DmqUrK57p61ob5kb4n3ic2GoYarJEJKu2L5NUPs1SDVPDUFg7GM",
  "key24": "3Xe7xnGCs47a6oJqE4ZfTTijfg9TsDEup6bNEbakQqgFu51PE1KhR7L99vkv3pt4oNvKbcoiViLEtQGFEiKX2QuB",
  "key25": "4CHVMja44ucH3UidhwdrEQQACR6smYPQP4ezyzjr7C7bh6cJmNZ7iuG23QQT2xuBoaS3ja14AUA5jUo8LrEJNXVG",
  "key26": "5NmP9Ho2LBgzbUBotjVbPMJJoMNxy7MxvjdAWxvLjgVNfvuNkXA4jhejMykadtzNM7emWRHNurj5SSwnA5LRWB3w",
  "key27": "5AcnabgV71QUP2VwyVJdQdFdsniRBGwh4EfpGZz1XcDvRJBfiGEFeyj5pAZeNvuSAxNNrDCYQ9GxqQm6N4rn5c1n",
  "key28": "4BqYMZwNPQd9dvGWsEJaM9VYN5oRTip8EWZUs8JAMaM2Jwrksty4TdpkdUyfKS8W7Ypjw6L77B2fp1QXovwEcApj",
  "key29": "3HqpwZN3jCjhtKLUB9bMUTcS3tWD1JR5UX4MAjhnxatZzBiJPwP5GkgiEgHpngD1QMFLXNGWhsf22HfcvazpyRS7",
  "key30": "WsGRnzBrzAYfHXw4mqV87gN1KZLZ5hmBB7FRb2Vrir19vFBDenEu6Wb8PNgRLoc5ww1kvr7GdBrcuxraBbseVCU",
  "key31": "2jt7C5hBNjj71daxVwmqPjiegSKVAfWBMojwqBSX9CdYfAgXqZYa438Sosqd4WSbJ9hi1kMsoPVXA8sm5vYT15BT",
  "key32": "2C6e1tck3thZ38Jrj9jsUFrc6C4c1mQvyJFUgmjwuHh8Atp5UCbsnzVkjczd3MZUBiQrcdPkTx3cJLAXHt8AUgE8",
  "key33": "4iK9ewVsc9KdBPxjYf13KrFtoLCARi6c6wb2TTZiJKV9c3YtN8H3V6k6ZMsk3q3dWzrLreunmeTP3bxYKpKdR8JM",
  "key34": "2q9xJVbkomSkNtJhtr7Qh4Wc2NSAx1SZ6Q8y9LKW22zJXEbDodu8ZVF23KaqAkVeVwY8DSNvEs7qycLsJbrawazd",
  "key35": "3BSaHvWncFBSsqaTHgkFCG7b9KjW6njgvWD7Zb1LLYCjnjkixMRdo3H5qrB6BmMWkmKAoZmHQjY6JU5rJ96wjeus",
  "key36": "2zY9RnRDQsMx3u484Dff4M8UZwHQ2NfAyNPbMzvgZWuZic2TpPuHGFinEJ5RNBrNNDdrtm6a6GGThoPcR2P2gqR8",
  "key37": "54ZDCyuwB3LzVhKfbZCRtm8eoqGhbDQFugxirJAg6cNafAvGxGK5SPywcvMG2bQWVTNbDqGGfV3SfTCXgXLwJnir",
  "key38": "n1fyQzuW3LGUpisLTDcBA8zKN4sGMET47F7sWVkYatSWCehsE18jzaqgww9435WRxwYG2otdfnsUuNMndm3tKwi",
  "key39": "G4Jh7VzD16pvnaxMue5WY21meJgAXSaCK44WJMwXsK9Ke9Wb43MP7ieWRZbiA7ZZH6JWatbAWHBtYR2jgYtLD1c",
  "key40": "2SJxfq5BHK114V6GR4ok75VGQjdtu1RVyi6ckVXpgmvBeoLpbJbQsNByD7vN1PoEDLttqgtnj1FQKGijdfGLzyP1",
  "key41": "36hEfxFRsexrEKDr6DZg2XNEvuK7D3UpYU1b1vH1GoNP5npcmg8R6HYgW1FzBi9UMpte9CCrxReDMWsg2Ea9CyJm",
  "key42": "3UGiJgaygPucjTBnJ1JkmGj7rMzCJkL33vAcQJg1h3z9nkS3rncPTwDwuZwUnEVnwTQwHkkVhZ5dzojHSdKo54rh",
  "key43": "3yTVbfU6VmSrFW6ckA5Gxwe1utZPibZEpifu6W2KzJo18SUeQuGdxuEp1RrKoG6PognJcrryz5vyieFkEYfBk6mn",
  "key44": "5mxrCFKGTAiJLmJhnMnQctfgbCL8boDzbanNAJu2isdHt84kBJW1wKMSczY4mpbUkAFfRR6F9KEBpGLKjR3tCh92"
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
