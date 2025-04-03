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
    "BMpoHk5rejP1HghkFtjyRqbWTziszM4oQ3pFNqnGQ69dJo1Qx9rM1ZPH8o7Dp4YuEH3dog4qW6nwFyoyjBU2PNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "127i8YCHvf2NzGHDEB1KaUiggkZddqbAt3TqsNwBkEjqVdmPFKCtPDB6vtjtQesNBXREK4hFh2sMQqKKJc1gwGvs",
  "key1": "m6Bt44ujpoGPnCRUhqRMmisfgJRKkPq4WJZWTASgu7Lz9Mpbh9rk1opLZNyURLJFENHET2hhrqAcAcSobijRtZi",
  "key2": "5FBo8CqkXgi9wXaftDodWKvhsEBNPRs6ediipVDe5RpnZoZtBYTn5c9sxQ8joxxa9Ktk2dY5i95aGeP7oC8UM7p7",
  "key3": "5V6YYmsN8rgBYpFw8JRvK2HU8pJBdn1Aeg7A1DqvgcZDVZda6YJHxsjKijwvr3V58ztTjye1Xa8WAVXCXsdBqWAF",
  "key4": "VRjQe24nC49pfiWEgFx4bMmvq7qPDYsXzRAAtUrU9LMPsQaGw6rzXwQNP1KmRpSgJVfgC5Nja3xysG9MM6wyxtY",
  "key5": "3wQYgKcFCdAQj7rAsBfBwh9SDxh9LsMpiWuebTJPq6mMcVvibU1A38w4RDtePxnFuW6jCoN5ypCvjrFHmyMYMsqX",
  "key6": "5CCFxKaw9wXeZJBXHRsrrGkvptQyadgQRhWiU7MzBJm3fXhu3BXGQXSYVwdcoeqoXPGmVz3z9534kbWA7Pz24fTc",
  "key7": "4HEEkZmJvLWn94fRhC1ahKeeZRREnNCUHCUCqHGyqBnJjaYFD7t1hJBUdFS2bdQW26pCYxvuJetFpekuhUJt4DmJ",
  "key8": "sfF8GRmtfWMwW18s1VU7A1okQhz7i611VnQ54dzHTMvmAbrYjMuHgjG49Q9TycmS3HzRQZtQu2e5L9qC6gr4Fyg",
  "key9": "oDTP9n2Hn5k4h5wmzmxCwdZLKP5KBmYsAd59mX5sSByzZEbSSdeejGTt1trWSG3QCFcWxzXtVHLNQerG7tcC92b",
  "key10": "2BVT3DhCkx6h7AEcYCndWx5LsVveuRmo6Ydi84axxFr9RN2JAMCjZWPT8qVQ1c1EzwgqExWD9LjyywUk2APcDu8y",
  "key11": "2n7RU9yEHybJXbtJjqJeTVttyjsRm1fYjtYUmVJi4JK7Z4LST4gEAwjs3Yrh6qsRAWiV8RpcrwBUfm7zN9CW32MQ",
  "key12": "229kNUeTX54RvLQvQL72xNYNquy43fWxVYJd9tj8EiDssXyc5bmDpRqBVkvDaReL5jCHQUQhE5bhHjX835YajXyW",
  "key13": "4QiAKHJaqoszeXuQ76ctQW7tBSnve6XfqcV5udTbfkz8fozkaYtaT1MQaW75cNR1JWcnhWDAhx2KGTiifHkYmNDB",
  "key14": "b1geHxcJW8CUyBgt7xPBm2GV98mxHMJczRxA2KGADQZtSDe8sdLzDhYpXmMVkAJoD5bwLWWGFrkAoW7sXX4oph7",
  "key15": "22NjXYX5pqMAFfqVfV8RfNRFZaGxq11HMeFBYV571hZiPutMFA7WRYRpW6FYwn48nE1y51oZBSwh96CA9TarUggg",
  "key16": "NsyZ1yzx3Nob9V4K8RJsR7jGiHtUFaF2YkvB2AJN7BCSr8kiP61jtNykTdUYTsx6zHcnhv9y8HgqL6n8tV4SpeC",
  "key17": "2b4yZhnY1b21ALijfTaHeZQjrzHkw12AcM9af9jxKNHr9qwJZXiVbA9rFzzH3twArPHwvrj1YyTrXopH22EdECME",
  "key18": "2NsAS7S2WQb154qvSf35Ah14hDrcwxWVcHZhLKNg4CFudo9RXvk5V6GXcJciQhsdSbHJr9baU2Bw673JzKvwF1ca",
  "key19": "5fehzkVV5NL6hEAe4N2ySBJZQhYm7HDqHkW3uTRcLpZuyGFtBVUpg1Gv5tLcWPfkYyKGELSS8UTXWCNsFYeqWezF",
  "key20": "3ShmGDMymsKtTdMpJzkKYXyEoyuLgdRxHhyXttYZj9TspoM5BR76uhEDpUUTqbE9LntW4SQZXKuDPGcgyFw4NCRv",
  "key21": "2sGG2yAGLRTcg32hDW4GZkghXfgwVw8YbwgJ7P3zmAUwdEQJZUDT32Xzs97LsZkCercP6QZuY7ZhdAaeohuuUPGS",
  "key22": "4b4NGF2YmGDm5MtQfERSrTtJAaL4PXznFBJvnKX8NqQ7Ys2rPQspVJRAXx7mWsJdC8YmZJfqXVQpDsSi3cyngSuv",
  "key23": "4MPqCeF8cQEFhS368LDtDUahrTJHCtDHoA9GHcWpaagtEttoAPyHFmMYNGJe65F9YkZK1zq4cxGmFeAfdJjPHFoe",
  "key24": "3cGEkzbq62y7hBiE685zTxNGoA9b9kq7xEW8S9ySuTaXoqjraEy9ggc2k7R8MXAQcACjURknCEGqEowRhpHMVS7m",
  "key25": "4LR56FDw22BJ3vWMC861ittLUFZhteJRmZ9oeNrsFJn5EVRfGCXGyLEsvthYeoQyx4fDtU3w1f8H22sSMy99NMNk",
  "key26": "qa7XqZRqUDRnJL3XmgukAhN85MPCfABvavUaCCKKfKeLYpmVDJ2VHLMicqdH5hQ4U9yweZtdzmdfxmoMMUeBdFV",
  "key27": "5c46Stzsvq8p74HPiYoXAFB1u1zhdVaLrHYxJiawzCUp8ruYoztesA3rKLzzGL9tmQ3kJ1WbEW24QEX1S8VwpxGH",
  "key28": "2Bksv7APuLWXMgLb2cf9XC6wQoae8nCiEeKqbTcZoM1T62bC9ZE2PMqZvg3zmocxBF2jNxCBNq8oiqtCSAiGSaMU",
  "key29": "3iLjRT3YHNz7MBY8K1QGmcyr5Cy3ykLX5USVNrbGUVugfyU2oiZhZAeybRcYvf7y4xyDrcJLtDb9Pwg4LFpV84xg",
  "key30": "5NvYEKwFybu3iFNnDUKrKTCJKSVCezi4tcYntyGd6je73AGkx8NZp4xiUiMwr6RiRs75sh3DXLGioMbrwWnDKhih",
  "key31": "55e7d5Mi1swV3aFV1U1SacxknQvtCKCPN3yyPBLF4kwKfFMXoMNbRvFpKgvkLWmvv3QDfp9TBhADLrbMHLb9TSbF",
  "key32": "PdRte2ASKfXmirHN52ryP5HpaLkC3bkDVF9ytsL5XfeQm52f1gMXbSuVNkqh2Rjhxz15kmeHN1ibDLmnFZL8WQg",
  "key33": "31MV93hZ2ZGCX6A4V4bd4cq6Y4VGEGwZhqTLR6BQhqZcHHZ5nKF1UwcphZUkMr7fwzAj9qssnQSU4nh3ydVTvzvn",
  "key34": "3HLxxmdSBz2s2Hws7hVCDMt5FGhCNZCYe4LKtfiYmSNEzyDWkXJQG6E8vceDqpNdzTPfo4x2gV6pnj1vGqLTEpze",
  "key35": "5K9rn2NifuMLJZPKZixLexfhkmw8AkPZ4zNEYNXvuNaB43FJNnGMv1iniVvCvV4sa4DzF17p5eb18ecFAV6mP1Yt",
  "key36": "VPX7bJRPRPSdfLeRqD3mmaWEoRnp2dEMWkSdwffoyJVkss7tfRrWdcCUdbRaqq2EqSXMmNpYBymsj3zQU5wRi2t",
  "key37": "25d11EYv53tNyCC4LFaMdH1bdyCiiV42mQPi1L4UpioFoA1CmCU55WvBuBu9KoMJorjZgqsGih4yCDsAok2MiUcb",
  "key38": "2UeSMeoF22SFSXpxEM2GSpYmo8SH2jWNEq5uyw6B92D3aBqZgzZkhpSeoNx7bdLbn6HBy33q146xEAMyMLrbXX3i",
  "key39": "SkQEsEKjoMwr5wBWv4vem2QGmWb5227rgr8ZTS3P5E5QvJLHFCrTTEUBZWtoyUDGf3jdM96DWEkMqPexzWWX4V9",
  "key40": "4tdmtipjybzxasaFy84Si6DAoAtfYQzfYcmeCnTMjrSXPhA29TAkuuaiXCrFefUw8552mD9gU3zVFxTzSZkLDBEZ",
  "key41": "2ExjGx4BWzB85YUVxKT2ot24RZ3WysA2169VRy6hzNQEtJ9sVWEugieWprsnUpvGSZqfHh7jfyDyt1TnBipZ7Kpz",
  "key42": "k2Hf6HKNkGJUH2NsWSUfL22SBWhLzZwTW3aVJiDwuU5JsMFzh2VRN5m1GSo1jozrUESqPTsGdgE6yQk3TjMDWqL",
  "key43": "34Jeu4R4BcerZMJYNvQjFHWfmXP7NCK7B8wEm2BGC8PQ4kvFrnD6ij7Ah3P4XYztDSRcMeGe91pydQkHpSkPhof1",
  "key44": "eTFU7X5Jnhpvg3THzXCuBfWV9FHg6sWPpf1ozdE31HGB1WAUQx5eEk7S718pZUu5dJbvMASFwjJP62sqHpg62sr",
  "key45": "22Xxe5GMupcxhNVwvQ4q9Qhbi5cjoPXZpwNUBThX6yrWEo7RoWZoAjwmuhAcCVABB5uyNav8z4h2hbz3KB51HfVa",
  "key46": "skjXQEDPHXBJEajaw5VP3yT386jpr27SK7t5PuEH7AyoKpkDkp4VCnuf18KsS2mprareyYYKahsEiGi1ocDsVns"
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
