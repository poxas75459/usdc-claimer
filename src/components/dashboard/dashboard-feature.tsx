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
    "2TV4G326ZpGavbizee226i7tCD5NKQDx8A2FZaNUEw3rvXGHtnfbMuYEzyfvwKeFVHWMdC9sgHqYYbVahatr6Kko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZvP5Bc1Y5Rh5RunFCo5FMXrNhPuggUG3c3KLwc8pAYTUGb32LQRgdv6cY7E2RLhUFpg1gHF28cAkJCLGw53xFHW",
  "key1": "24uDyZtNsTonayjeR9i69MkYRcT9GReCzmJY8AWDNiVUXUQwrNK7ymB2QRvXkf7Mvzrn6WN8uMsDNoLyFYBXUTE2",
  "key2": "xW8LcrdbjNbMNBUbZPPr5bqccijAxPhw8SwkRELj1pVuoJwTZsVPJKCEpBpD6t9GWHzBSVMTUtFvAE5PgridLdv",
  "key3": "3ZDy48cENMXqSZQCrLhym2KiVoQhRvJX9W1L6RUhcxH3xHEXYdLY7vewVtvg8QrPFrMCQac2YwjQmBMuYnW3hC8w",
  "key4": "PthPbXeyowSU3E96atwwH24Zek7RacUEXHpiF9JkmYRU7kMHNJ3BMTAjUj5cMswz66E2VVeJNHmXgNqmHKbTnMu",
  "key5": "3oZSmuzN7aGLGe1K6WADhLACu82RkP1HMWnmqd7C1GnsmUUDnXo2b5wn8gGH8sxbPAnkJCVPLRMZFFMJonuggfN6",
  "key6": "SHCYjUHHN2eWy56XvsjsCQqUgVmZMGtGRTEBPEsd4rZ6dB12WJV3ZuxREDx43rPv2d9SkRSkDeD3gtn3p5es3LK",
  "key7": "2fi6Y2UFTHgiAqz7o3oW8G5GAqLceTEvSxefHmfJEiR9yhMBBsKTj98nEaY4GUUEEV1mmMC6QbCiy4NBDXM7hx6A",
  "key8": "2W3cGjMtFLxpF9R3CHeFoLtHnmsUeRN4YMhk3Kq9yR2Phcdv1rDAQqM4UQ4giS3KAJ8GtMEaTtNA5oc83KBMSqdL",
  "key9": "5orA1RXmgoUYtiLWnV6JwoQ26CiMepp2d3uGAp9NBnsysQ2vd6S3J1GQW4SU3GxCdYRoV1TgkgdNADadNnZqru8X",
  "key10": "4iBAJHptuxX1eZEZcaLBcryaPQJPGS26121GQtGxnV2FAJTwhiPD5gPwaYRQAbs7nWXVZcuspVEZ65GMGHA3mpK1",
  "key11": "5ejLpJ4heB5jv9DbVae3dzMv6mjkKK4vvaF9cMCp7Y9sBL8CTCvG5aq2axGTzzYbJR7ToL24DRMLDdPVNN7dV8JZ",
  "key12": "3rjceNjk5xNJCeugQ2jJeDiwHYb4gQ59CymHH1Qis8QGU2Dv5sFmoZLniQMXLVmaUt76LFL7DrVxrdmNbnHFSVNd",
  "key13": "4E4zVXjVJfMsayhFqek2hkLSgvn6gWJcg5Rv144zhSicTrsJ2BzqWdMnqVr4aNMzdtbZ72v3nkbVigacPA88kaea",
  "key14": "XuKBG5SXrAuTz6t9r75GnUByshtsZ5dG9oREi8Vwtpb3vNbRc3kKk8aBvXRwJ2wo3UTL6zzuCTMpz6Y7MVieMgw",
  "key15": "2uNCmjdvpKkzNBA1akpoYRu9r7ojLDsJ6vMwkZ7GE5k7h1occLuz3FbfmgXsmxqAseDoDM2AFN9ZEpzH7pzrAY5S",
  "key16": "3bZp3UUD85DAAX2fwth1NYhjaQSwYkJS8GjPmEZ6U7a7ghVgwFa2eirbT2fgmjenypKw1cLM2yP2rBpoqusckkcj",
  "key17": "2V7RysuLEPDgLJbTiNaw58JCC1tRQnej413wFuUfkzbEV1G1afE6FLNXT67Kdnu4rQ3utH9iVVtLf4LCt95XQgbk",
  "key18": "27nuToXzz5aLRtGZAEYLz8YFWqBgVKiRGFA81RJaPwvEYxxQQJsz7M7DgfiSNMYbMPp3B1rDWx81CMaqHZMsDbpA",
  "key19": "3nPn4rT9UHff7xTsSmrjgM889Uf5neqfxQo4yDg9v64vzKiSfLEhcT9K4JPxvh91GjtD1JTKYz1Ewru7QXGZUt5u",
  "key20": "4SLJ41MRjburLZuH1pEb2D6niGPStjqBUS8pjGSpmo2RZypihfVu5mrM3Hq13b7RHA1u7x8N2j5F1wZFHJQVfA1i",
  "key21": "3aqEjTdSHpL9rzpwM3mmYAAteMd51aN34yTEtu9mmxbEYA9tLp7MWDxW2WJVshs2JQfyDC3nykA4L2E4pwusAfBi",
  "key22": "4ujvjivfjxyWvDCtQyvMu9dDWQrVTL749m9V68J3jKoC7wFhJgXnDFZmYPutdNd9Z44q7CW5UmYVeyvxReLbn8iB",
  "key23": "Wn9dqhUsFZV8RArukgHMLGHbPxpqDjaiB388hw99AaaeEBSfHaRmXgia3xAeYiHZkXZ6yghKYidRXxpGozD8sqN",
  "key24": "5qX7w1DhFH6vjfuacaq1DVLscbWgTmKoEmDp6NAxbN8RqVGzwmAageAMznKYyYLDrQ7TVSks1NDj5xhVAytwQeRJ",
  "key25": "66QMvjr2tSeFmCqut61MVrPi2btjTaKkBVSPu1HfUpjeYS5i5CYpRzGZbcY4btL8s5wk39FfZRLSKjA2VHZXTjyN",
  "key26": "5YsdcKoXnoUsmquDuZLucPU6Xcadsb3D6vKUNYxcwY6s7uwjDnp3vGF8RM6rNn8MjtNiRUxkwJ6yGzQXGzhc5ncv",
  "key27": "3ZG5EdKozC1FSWWyUnVcJq6qshYJ6oesonpGWRKdfkLNPNhoXnG1KtA7dLj8Ss2cCPk1ERsCAeNNBEG6VX5eHvEF",
  "key28": "riimGFMp1Tcu1q4npqCte9epbRi3Xos487qGiZXojkmrX91YVszngNPoeAdVDKVQBurTDPJidX4k9LUfC4fCcFL",
  "key29": "4VDD3aFUhzpYEvVdp93DiuyfRbRGMXmAL4mXc3X3dYEvVNE3ccpjRfuRDs8Nr8kJ5jCPNff1AC1SGnzmtrbyCFML",
  "key30": "63SvnKMEpbi6Drycmc4W9pjY2mbPa7LVBrCGnPMLhpSb5U3okTgaafejU3CJaMi1wDY6RFDodZRgCy78ogGLvaFP",
  "key31": "5tGG3oAzMXLFuVfBquyWUg33KrVeQPbhQXESXYJR3J8VPEnqMwRtQ5ajV6VoYgXAiETD5odN5NZRS7VpP2hicNP9",
  "key32": "2woKHJr9j4D4PWMaxNCW7mNodGakGAfHN3ndzfoQmgnLK24TB1RPBmmmQnwhzuj8epQ8EVsVfwM5SNr9tMFJ8cnv",
  "key33": "3xjz8PeqoJt17XgfseRcf5np6jasZdo8vrph7rLb286LhBJaS5yqmMx9JsM1kQe2sFZjyRvM8ehQhKvy8ySnCTAV",
  "key34": "2bf3rC7J9BuRiwQRdjj7z2TiDeYxzDqY3DTMhzE8iGypvSj1tZREFHsrDk2Rrhqp8WwMTkPxWD2qhHNkrCpXB31J",
  "key35": "8NRuxUGnM3rY8FckRdj9W1U3ARfbSPS5bVtQjFnCm86yof45WnfSMCVpAk1r8epmz1Ahhn4cmvVz7mJ81gPW2gv",
  "key36": "3tJMgEqbPmQe49p6prFHuXRghz36Zohn19me1L4uLrmHacoGqHiWzxj5DNwfMvZWxi7kPB5hf78gGDVqiTS1NdZa",
  "key37": "3Brk9N5jhevT3pLUGeE3gf3nfKxqhPzu1cv2xU4QohUm7TJtCJb1t3KgGVaHsJipYS1vGfe2M44qoaNAJ5NZg3un",
  "key38": "3h2cx4TfYPZRFpqXp8SBf7gZoQ3JEBYVzzWyjsJrWmHXGz1aAwcdpK9hvhtB7rm7v45j8nwL62vFcvsMcLKmwQQG",
  "key39": "2GjStW2zfgJCuFu4DHkdb6wURpDF76DAqpTXdxeWo88z1kk1LhC7yah9XUkPyW7ignepuwdfEGwKmxUptnTqB58y",
  "key40": "4pvMCvW18BKKB77bENbPAwxCA6TqQMAN33rQHzLjJqHqXe8ZeDYenLpNMhu6TET1dCy1fGTTuus7MUiUkacTDCbe",
  "key41": "4sjhZ4js6unqbLB2txf5hYka33YV1qvzcQZFGnCfeCNk5WGcpU7kLpFsq5WgAbLvzg2baLkcih5BfpCUpwNkiags",
  "key42": "2MeAAdtpeKPymDifkfru4uFLimrBUR4wu6GLthQxn3NXCNp2JDhdDbb7JHYuZ7WSmNi5LSAkUe6fGTk6X54Q4ZXc",
  "key43": "Wz4zuHEwbcC9GWnrACDHC25BziART6VBQz3y4zLZWcDETf8rFve1dAPzB9cWkpUyLVUvx3K5gcdm56ByzSHHXCF",
  "key44": "36wGiTmzPBurVgKsr5H7SyJ22sDhBgxdqqGBnbAo5VdU5PE2ufhDKP3M3WmNH97dabMfgDyBPxrNaxXw6AgftSzs",
  "key45": "4AqLA3kgAu5DrafpMRYdecJki7wEZayHVcuAGXeyAt9HJip1Sn4bJNvcQSfGdLy3ReXSrANBu4cpnTuwBdFUxkmU",
  "key46": "3joVD699cZTvZNReEjJfFTLZ9WYCDAZuoUn1LQCwqx28uiwNfAeRtLWn629Mw89se33dGevBnNuEEcrK3HijgPFE",
  "key47": "5vGtELVz4jxvh9fHeuqQNmf7vfe4CzdfvNq8wMXgW2z53gtxKRkxKrBAtQFtT9mbqH11bQoPrxcEBoJx8r8a5sZk",
  "key48": "2rfjNCquzmwJtbLoDB7eLe9BRpfdWPUSNs15xWM5MdffN72QB4ckrvpHCqUJLAUJh23k6WTFFDFqn4Drs6Jkh1RS",
  "key49": "4uUR55tdqGxQ3aLmvzRtAfrH3MoYrXsGfe1Gd3vezQ4SWps8QE8PmC8bpBa8uSc2c8rov6sQ7fALHvX74AaM7Tot"
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
