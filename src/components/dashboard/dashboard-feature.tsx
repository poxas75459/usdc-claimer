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
    "3Ri2swDQRwpZW6XeavwH8Lxnpc7e5nPYToSXUDxjmLUGH6uqWCEppmYiU1FwnSUhUyS5UKASHSehYvuaMhowCijG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBpjg6cKu18ZQyU1dv82xkjfgNEcYbUeruu2EAf8KaLc71q365jz6ZtBa25JkzKk96HAaLb6UkYrJrUX7qSCTe1",
  "key1": "3fnJqihZQfdYywQKTYZK19d1ZMbYSHfHkmpCRWVDY5eFGiczcTWAZe2rxpFQoAWGbshJfaUETah84jxJVPauXstD",
  "key2": "57JXJ5VtCuUCpiWFt2e5AgxqwdycgxMLSqeDkFYMAbym6H1Jvp8ZQi4jzfddXBgDnhoL3aon2NYkZGC5GYZ9QoQQ",
  "key3": "2r4iFLFvN74mffRsTzYLvTCCkTFQBKygsKTAQqX6EQjtU6oVFxfpQ2PBroVwtzzayM8BMusXc2XbzwEXRXSQkGce",
  "key4": "4TKrN3doGSFzsBBCUxwHrNJaz5K8HWD5S2UFpozvpanvjDZ7mThbwrmHFX4MDM2gWX9YnSyv6KTArP37wvEBLANr",
  "key5": "4PCiKL43x71HWzVN5HSg4zsG6peyiGPqn7sVN6jzdCxTL6s6e2sie6hpmz2sGFaBJNqCngqeUjr49fQrQ74tsCFN",
  "key6": "4LZDCMnnS1PXY5pmLJrDpoYpTCCB3bkA8Gqf1ZwHXfGJr5JfqASqrfhx8wuUWNrADWkVJhWM8ExheNRvWX7Xg61U",
  "key7": "8tPgnFieSrXX65ECXFt9jTGcec7pskxrS6YDMU7U8ot9o8nAU1Be74VBDgVFFbbjwzVvDFodjs9AJ4gR9yHbbCa",
  "key8": "5DGkCGvQUn2yhdjpSNiJTqyi491Zymbe9ndptMFgNFonQPY9QSspLNJNPhKuBMeY13awc2T65Nod52i9CztKuRdH",
  "key9": "2DHRpBGu4JYn9qxUjqv8fjFzuTLzynxzoU5XPNA3BM22zxBnX1EcnAbHP4KMSRRCtWNXJMbLHLx4b1BiHDDSjKsB",
  "key10": "aotW5VGTFGSbHjUaHfHytB975JDgXKKm1M9FJxYG8w2ZpSzDxYyXDJQAwHibakLqrtSeNhH1EihoPbzgMUsBnru",
  "key11": "4ugBycjNz94hUkFVwQPdQPFnD9AxrYCAcvhKAPFzGSPZ72AHVR3i5PfrCParVzhG5yZPB4YPdVzu5DfoKaKqbApU",
  "key12": "rGjsq65tHKn2EndqRLGnRjaDVV3d2DXbByYk7VrsBUfqJbrRiC7ur5Zr697BmPLKxFfuRCQjXz9MS8wURv8fRE5",
  "key13": "4PjHU1XSktETudngzeRLCvCquNayd2ZezUy3YgioHo136rjv6cRp8HeMmNMiGf9abfmUtNBFdHRYB6cPW7yHaNnV",
  "key14": "ruGEyfybzsncPp88SiL71GvAk7eEDATYKVUcLZFqjeDrM51CKmcciR8f395EnXkxXJ4S9eipsVrgFZxY5A5sYLX",
  "key15": "vjhy5R9Mb7ZrDeFJGK5qoNfkQLDUjZtddgEYGzkxBt93AWxPS1fpVSuT5aPr1stahcz5hdrB9HU44iSK2cK1tWy",
  "key16": "Exhej8tuobspfzCDzoQv1YmTPrctGipwzAtJvmmfaYt5UB3JGKB3v8rfR1ahow131xM3kJFAv1YQkKY14H9kYFX",
  "key17": "48Hd1uuYMjU2awSS2a8ziUrgp1eK275CuTnhRimJcBLtbMm5J1np2ciMpRpALDhmTnPfKgGEhptxHmRhFqVYx12b",
  "key18": "kCLxkRqWGBfUYEE6PAJUJ877W98jaTucYUh6CC7Fzqd2yhG8STTA8wbPcqwqeRez8rStQVgePAZRCEihgT1nb61",
  "key19": "Kh4vt48EZDkEkDYCLvKS5hy8jL1WchH5Qdb1oVGMcZ6nieYYqDbWF8pxCRSQhdegU53rQr8ZGBhNFHt6DUnksw1",
  "key20": "34jRidKEyRqHZANB1s3P9V7BRFcGdK3NPrjVChUKJGfvAT25f7JFrcJ3a7aqgXayLSZpzjV4fWG6pVJbxcokw5uJ",
  "key21": "3d5EBtpsejeKKtrzACbn7kZvQx5e3ocSQ2MUUTc7wp6g3GGNJy1myU8Hujx4LpuAa85VGMrnjrteaCAPFpGJWV8W",
  "key22": "315hdCtPDHCHG9GMCGS5MANC9gp985oqAqksDAdpfhexNHYCTjZEqhR8mhMJLkMHk26QqY57SJTwK1NLmBZveHHM",
  "key23": "4MpZJsAisDaw4kwKLbJbDDq2QjZWMe18TssbuW3vV615Tsyvm3k1TSHVG3BuRsojcCPRfyqJRzG2CJ4xxQ8gQXrY",
  "key24": "5Dav96X7Sj9jiEb7iLrWxK9qF247WihV9wutRL4VJVgUBhJe4jQrGKTwFyEZ38d7WxSfHMSaijyBaaJS8R3RTG4U",
  "key25": "24pGLQVGN3DDEnUGZgm7vsMH8VjfPzZkSSqefX5AAcQCzN4g4M4chGq9qaEcvnZXb3WBEM9unv9XHSt9hR2W1BrL",
  "key26": "3yXSeBnnuNSQJuJWkqrvUjn1BJMsP8Y5fHKt45LPoRPxBnEfbPm9MqBVSLe5GAVYJm5EU57RovdbuqGcZ2q8eZYf",
  "key27": "64NipA2cHSzpkNiY8YsE1VHXiDRRzRXCis7GCM5ahXXRCHP43yi7zFXTGnXxjH8kW5AgqvoVpw76rUp9MJwgaSwF",
  "key28": "2nKqLnMMUAPsDp3mASib65T8c1n4ScYca5QjDS3mzU8anfUnx4heAW5kNs4KYXaxbKC3uJuiWPCrM4r5UhBqLTnk",
  "key29": "5zjnpMu8k53BLxX6XUDoKamXU9ZSoRj4WoKdrN2TkXAtJkKCqtyvdZVLqdYiRgde1o8VCzM1KTWAWrQcRjNkD9bY",
  "key30": "4enXnstfkW1gWULnwwrQzVqPWSaDqgPQe5bFg4hyvhR8N39A6XzFES252E3eWR7edAvqvx6rTfAVopa6T65Dp3cs",
  "key31": "PE8RPiuhfHavET6ht3ye8L8PoW4WTYJKfxZwSQPztHtcrPssnEeM2tf5PU6JKnpP1gdNfRuNM7y1d3ntMQv7kpM",
  "key32": "2w1UW9hQtPEBJtsqu3eRKTQL9umJY1xrWZXUvCMtvViLhSvQMLofoKrbnKeB1JahS45g2o8Wsa4kMXiZ6ZF3Ar3z",
  "key33": "2hUiU3qivA6Nv5FjgaAF2JynTNiNv1GZxqqtynJTZ75fbyJx7i2qffE35Sp5h2dzF9Z6ybpXHVGNxxyQHLaEEojR",
  "key34": "219WCnF7bvwDjBSWD4D6HCPmszVsu4wqoksYkjiYm6TKata6QZG7ohW7nEZGmKy9KhoAVyzxBXKkqEN9gzvugngY",
  "key35": "5f58AYQbfmuJasmYkF3yJJ4SwkpFK3rJUvbGSzh2AWhja48Vsqfrm6mfEQvH4MN3xTKZxE1WffGuHvrgqz85wUsf",
  "key36": "2fbVrYPsoBjV5kWFRAgzPdFxogSRHF8is6kTCibWyERPfDHNsbczrRQMBPTUTMF87g4R95YVnrvRCMwZ7PFRB9K2",
  "key37": "4Xk7aSqKpxptBdTjCJE2QfBy8pCZ4P9kmgCcpUy8bf1EYedsY19YfgLbPysyxJiokMcptRvNKUwk4RhHJNXMh3qj",
  "key38": "2C6iUNnrim3Bmc1AQKmi5aVXAUig5SwX7BPHcHMsT9Dqd843gLDerJNfseAgieBz92NQGTUsr7u7CFCk1XTSKJtp",
  "key39": "5XVhKgr32gKGrB76wmpBxzifRo9iFayjvMdhFsTvxhqWHj4LH39XJzc8QmfPkkS2U2rZp4j5CNYYhUsSAiYsTr3s",
  "key40": "36vCBTD66B5RVS3Gx7Fwbbd5ss4cC15d5AuEcQ8sAW3hSKoKmSnnHzFjHZEdm4Sz2rZNuvuhQ23ed9zHC3CjWmmw",
  "key41": "277haS9vpWH7copFqpKqqGxs3REC71vt3xih8f4rcGiNS8Hf9fRvKqit2C4Ae2WTsxQWTCqFyf36qG1AwUz3RiNs",
  "key42": "4xd5ZSUts3NHepJ5npQMH1qFwnhVSbuLsabrSGZ2m7QgCvP5NVEWPmujBiCHcygN7wfx9e5XyjrDE95DYgoYQu9y",
  "key43": "5Dq13wnfmkU9dvNbJ1yCqzNyUGSUQb26wy9WE45rdKnRjzjfu59DF58MQLs7fPxJSCJHH3zPourpQwEyaeiXghcu",
  "key44": "oVwNUgKvtVicfEQbCYXqDceM4QdHT9pyaBL1e1scyQkgfDn4WkYbN1rJy1fitD5zNgkpAfyAaQE3pu5PPrfZ9up",
  "key45": "5R8VfQWhyFbEzp5hJN3tx165RJ2irDkPgh87M6xZyq19NawR6YUsMRDhGhwQFGrxcwtKcAWdtMLH4MpGy5TDF221",
  "key46": "4JoQ6TENf2n7gjSvDYJJwCs1EyCehQ5dYwd1g3A2CFc6yd5X5ZwEPaKWTQb7pbXGkwssBHKpkuNY8jnqT9nNdJD1",
  "key47": "5u2j2LroXRQUqJExs1brGqrQfiF4R4Cd538JcDGkBSDNUDenvPpt4r87j73zyuaPWuarKMAXmHiua54jXerRcQAc",
  "key48": "5Xriy2sSdXYzSUsoXtnBCYhiBjPWXtix7W6rzA5UiPBfmzZv7fmREwvSRHEPLWuHTqKQfyGMLwCHzhjPX2J4E1xh"
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
