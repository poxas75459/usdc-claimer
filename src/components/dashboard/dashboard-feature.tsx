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
    "285CABuQ6x8qepdEdN7CxYRHGkxwTAGKaPwAxA2EoviDBrxXj8dga9eGyvK2PmFKSHHEstvPv7oXZnuUJfNzE3Dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdTqVUSj5r9ZDMw8AH7zY6xZERyot8jgGK6ahmFc4VGAh3zqdj1fEhDcCzJ4owPt5PYj3HHSFTYwA7u1RrLtJBc",
  "key1": "2BoGBAP36Z6pUGefDR2XjQT6Cgx44GDvgzRKeJSQmndfWd6Qd7mnx1AP2huiUxhTgA6tp2xg9Ug7xSBUjTogWjsx",
  "key2": "2qbkpWYgUUV78CHgjh54UoHDanXZhy1upsmxRahAVRBVZprGZogZ4j7rq8kAr2FAg5kThwFRyfPZFHTACgFkmsn4",
  "key3": "3mQqTK4uyAf4B38hwuvhaWJPVhGKa6bmeQ3jR4dRtCBvstZfX2TeZ5Ti5L28PHYC2irNy19XBW4xc91TDGxUB7VK",
  "key4": "4WqJf8US898gLaVrKAjAPkNrfdPjU7hF4NNufZTy4GYv1v2VNbQkoXdsCtm1c5RmMZJHSJrh8GRWE3pXpwTzCfRN",
  "key5": "2KyXUYsALJMhxkRiyGChC6ZQcpwZdEEWtZSsvSqvt3qAmk5Q8ydsJYt4SPFrDh9otfv1V4thescaoLt52czvtm11",
  "key6": "4RMJZ6XHQEJGpPzRWLyYMcVCa9Hry8ym6fN884eXGXiri7YXiGN2SKqyrjQc3UQR3Nkz67x3tS5u2yccEvwi48A1",
  "key7": "5CfMTuuoa9oqnXha5y15gbiENpevmkTQB9ynwPveGu5WMG7x45AahtgPvu7WgPXE5ywbxXZ5n3r3U9V3LHW4Ts4Y",
  "key8": "5ET3nSoVbAbB9tkhYcNSTMYVSJFeV1apZoBtNAEKYy6egFZdL3mrdvD7VFam8cR8ecto7vkYzhSCtoY4w9hZG3DW",
  "key9": "2yXF5yZhm4uxvvggPMM8WrSvowWSE37QE6W8EknH1BTxniKBaUbQZFQ9d3bMvpwYVwbVv5DV7qsM8bh5KbUiMBA1",
  "key10": "cVTHU36j3e1vpkVpN3mxh7MQLKsyqre8CrewxdrhjSgczcgJE2pK2fjYZLniJ2LJpasDLRFaxy1Ukm94JJ6RUQM",
  "key11": "VMhc9xizm5F7XBcwG3ZwTUapQzXLxinzGaSb5qfAd5MRZv1KZZcSPCqcfnTJKkUQpDV4sxZ38HKK6U3YymD4xPY",
  "key12": "zX1iX19iUd1q6i9tcsbTKPknZkpdZevDWoEVUZAgpqEWLu8CjfV4PWcocyi9ZYUkcyC5RjHdMehEd8K3NFvdW6f",
  "key13": "3BgQTkdRziXrVzEP5T7JUB56kCqisUVM645RLjNP1WkbAPAdxeLxzdpnyS5W7cRVBVcfHGuLvLUBxyvVST2LKpZq",
  "key14": "4jmD17Le9xHL6iK9wFnoaFs2eJ8XtW2xUyXogPMLM2She6NG3RMwNq8cnYZzYns3YdB4k9zeVTQDU89ScicNHynE",
  "key15": "5b2ys5FfPdBGruwjqJQ9MNYjhVJ9h8xnJn6zok5kbXD32WR12SzqAnywhRwRyidVSaEqKzv9gxYQTs8Hmq4B8RKq",
  "key16": "4aYjYZdddFb9bDVmeYeFoKF1d51PMH1MNhuAZ4V2Nzddey2eNuaC3bRvBLPzpGMmG35FbkxRRwDQcFLdvbhhtRpV",
  "key17": "4wMiGAo4fGqetnYud2xvf9wnz81J1RkQGX5SwKw2mcVpnTFChYscFeq6hH51nbwtj8KedvPye99dwP33UTA7vam1",
  "key18": "21RPEuho7BiALbKuTnLnErA56fNFkcmR8wG1RkBhybZkNj7nnxZxYx48cEAe8eHEyGdqFPGJDGQbrJZ8oAda9V7z",
  "key19": "6erhcMvaYHLDTjiT9VVuy5hLjcNY22VwFGhH8jyZMwHruPNZG8qsG7d93WztfwiitpU89dyExDowbMRdcmMwYxA",
  "key20": "2gArYPxj73fuzTmJ5ZN972pCcHt6GQf5Z9KsispFcLKjmiYqp1eqQSjvHC8qML1xhLLnaYRXP5rvKATk1Q4FnhDx",
  "key21": "h6gqrXLuLARyJbQaQySn9w2SusS2CPDmhsx2r1QoRcEUKvLxu9XpbAQDcDSqSjnpRBF9LUiE7kWvpwM7y9e26th",
  "key22": "4PmGCVoN3y4wKEywJPMEd4Tv4aMefUg8BWCCrSsLeZ91uhZsCTWkigyFYkP1F9hthjFrm7VNhkDVvDKBVyrMs4Gv",
  "key23": "3nXdVDrMYpPcK6LyFsRUq2CQtWZUuT7sMEfWbYgNceN8Hdp8VBd9yGFi8BzRdbkHZRSygWtrRdCkf3P1io9my4EQ",
  "key24": "Au5UFpF2wKeSPNdArXnjEVVed3M4wWm3FCYsaFKPj5DsAwYuH75V2NPsa9e3vjobjJQ6eT5MNwdshCCt1zRahGF",
  "key25": "rkg5gTvuXKjx8pzhihDsKPenC9fAbxHM9s6fWG65k5hMF3UBiFjQ37yiST9HFhMW7ZT97fdnR6kXoFGjuSLLfPA",
  "key26": "qym8fPkmnvdj1HGeXTu5LevkC9uodqp8KXSVeXv27gJ4esdrwZivCqkbme15Xz4yqudA8uQKBVEM9nY5sy1vD2n",
  "key27": "49qURta4DRVquLN7eCqSgWRkR4UovwzgFhiEUzDHcvbso3Vkh9tWpgau4MXnyipB95CvBZoqx8HuRG8qGW7x4Ewd",
  "key28": "4uccnERHJFrAKw48y7mx2y7nGqHaqd1NcD4sBF832Btnp5fWTApAZXpwVRLyqdBvViC53GW1sbXuShZGkSaJbWqx",
  "key29": "2uRAs9XpW7hKQ252reUzEXrXAjr51YuzfUHxdsP3FF7MG9bmk9TbkGVQwDUD86hf36gouXNCqrhRqYs3rMoPZ8vL",
  "key30": "b4E6CbvTAphLmqsPrnDh67CC9xik7eGfBPkMDeJ4Ziq7w4gBcmKtCnz3LvM5EU41TTjxYRjS66Ef5esBMQFA1az"
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
