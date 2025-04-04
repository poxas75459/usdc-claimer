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
    "5Seun9KAyEsgoWyPtPbS6gWEs4GKbs2VgAqowd4EHohSGHZzNZs1F1sEaciNYuwtVGqtyNm7McQ3q3dp7VSKHWTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VG7WaYfHemGnrqUj1sC25LBTwwfqfheRbqCEuMbUMMcbzeN8bacDamwwRCZN5KHj23REgGqvDeNTNrYL6F2zvpv",
  "key1": "3HuzcXgbXHxzXjFmjni6MSayJxeKQUb7wB6xad1o76s8oiVzaUbbkbfPgty7wk5YuymAqLcMM9p21KeTSiPUpyMy",
  "key2": "5f2FRMtykcrHohp6vrvfwoUdTS7Sw8NqrS3jWp9mwVjnvTcssszPsonyqsjQiTeGoQvPBiJn5Rxt1HUXhiy6G9x4",
  "key3": "49FLX5NXopmiaSSHbXziGAd7tfXTJc3YNwU6iTQ1mSxfzbHUXNWhdmxGL7zT49umtr1nRckASCVCBaB3WoxcNRVX",
  "key4": "383HHQmRYudWz77nuXuLVdWSi1hkmLBd37E5Rajqzzgxdt3CCoqBMqpx4J1C7NMr4orWTP69AQVN9dzPrXtmFhLk",
  "key5": "SmHQV5cg3mC13T9A6a1Ahn9t7DGJRttC9RbrN1rboQ534JXksKTe6ZQsFy2Wh7VAKwPtP8Y6pQu6tvTDjEvhKjF",
  "key6": "5uFLx6hWGAEMEGUxgh4oktg3aomhsZfCkzQ5cGy9HFJkCWn5qPwdwzd3nte5Rq2hnhrjzr5PMv9HrwefRTpVE62F",
  "key7": "4bb8XifVkxMhvWGLNQg99jn8wBt6TXyb1WSkCNyS5ESXQSn1aNV253shdLNNGoP318MJsSopi7k2oo8EnmryGost",
  "key8": "4ojmv78XjqzL6m6xHH58zmTSzZZGq7jEfHJsUPhVeHuuTRbURKHtmFBBsfnk8usCecYwSpZYgmcoAJR2ZRCYXaNx",
  "key9": "39bQJH3iJ3emUgqFCdQ3uHfqsdw6d1xUfPPSJNkt1ogVv5zhAp3EQQFuNiQs6e38L6EwV64qzSZ9GqkH1Q2k3VvG",
  "key10": "s48EtFqG4EN28xAzyPCrmjxqFkgqshM78ophCrLyTP5GcfmnaGHtZ4DFod9hcRwz1EYnKTjAPwQ2hJAqrd2wFP1",
  "key11": "gG1nWNW8fd282eKGejZA4SCGEvrUADXwkoeRQr2FhVW72JYxQzBtWzgDaHLLUBdvWBMAHbKDKh72BftYSuJvg6v",
  "key12": "DieCRdKcsY43wN6NLeMky85iA4a8Quy9xpwaTU4M9AKu3qoboALmtWLPDgxgc98oUg3wkTVAq3c7zyYA9jdL9eT",
  "key13": "2jXnw4w2kVy52xLnw7AUmcYyNxBmoQhQdu85CijihWKGajVwBYgqJocg1a63uCdcJA6jgqi1H1pDp1yEBoww7Wzt",
  "key14": "5LoqNxy8WGQRNuTdGdTSeoAPuDGFw5azff9k7GTrGy246vMui43VVC56aVLWNTpfDUgnSjNqtcU8k5deYFqKpASe",
  "key15": "3Tw8wEScuE9igNepsJX2quVvTuj1TKQfET8DZCnZUb4vcJ3e8swmt4p2i2MpU6oCDz38KmiYbBZuQeMKLprmShga",
  "key16": "3ZCvoou7AGgDgaFXdD2c4CuMg7PX9uwbXajKt6GMPQAaMWqwWwS4KNwF8r38kAScoGcR6Jj75en6JDTLMNTftdvN",
  "key17": "63grSj7rCqYQAiERF3Tbpc6xTri4f7y9rgA4dbsxRQMTt3MMRnVgKaPpRYUo6QfEYZZToNMbnohpwoQZSeTajmyS",
  "key18": "4VvzD463ekLEikPUwSh2CgNZZNm1RAuW7oje5awCbsvC3nBvgb3oGiPvVPWksNXf215iPi1Qij6pwY5MUpufsrdM",
  "key19": "2jsHdJ9fcP3bshzUUfjKbEn5rJkgCpJ3m6mStz3kqkFqccfgFxcmuDpkSETfkhxcqoM1asMHihnJNe9mm2Fs7iLf",
  "key20": "fa3JTWo8KwsZcK5QPFp2S1SUm3b796LtnHuQRxor7uW7BvCcLpcqtxRgPaJsE5h1E8fC7Ni9c7BuduFy4xhxruy",
  "key21": "26HkMoDfx1LDbUPi3sUCroEFREdrRttG2sNc6VpdAcgSaEgbcHAscGyZrE9DU5tYwUvg7fEqbLMRN2Keryjzq9nh",
  "key22": "2gfUn6KCYzPpTMgfQGyAAJv8grB9p5nzNwJW7N5yYXCERMPGXAztueP4xJrcwwda2tZNLVRtjPwxpDXKk4FgiCax",
  "key23": "JdpWwjdanKkErKzhcwDUJAr8465yVRTKn3EKhkLKEc5kPuHxbtTS3guRm1KdSxQAntYPxW4VCFDbqtSRF5fWP8q",
  "key24": "4cEYmp5yS2UktUtBxBHBFu1ZcjsLZPMNEnQUvXhjZ2GYeLKRn4ej8nRCnqsW75xbtpcYq4v1wQGffSovrUErrXWb",
  "key25": "2j2co9pFmY1mtLYMs29m5hr9aufH1TiKYaFptbWk4NQjwF2JAzgJ5aHuThJKPGgLzeVJffykYb4R4AQVXMsU7tht",
  "key26": "57t8BDh5Fe8DfMd5emogM3R5od6EEx5go2tAQAfo8tddvs3bDCcDrCTKiVEBZ2sL3CMfZ8X9tYXL3BXFYW4na9mp",
  "key27": "2rt19P4DNjVJVEsdiugkWKP7baAm3RG2QZpt9C6zgffzNfak8CBDAf3WNoV3T7UjDYpyNL2aojd1TqLDmPeUkWfJ",
  "key28": "5aD1UTJHgFWUhCjWWycGkHjmEw7QivY3nkg9NNB7e9415DszGJubLaqmy1JVCQ2xRkkR7121sXqZKzahxkEAkJ8n",
  "key29": "2PcP564jaiZis2dSdAyxNFzyFEC7LGkYSSsigFDKyWkouQfep7Agsu7tYF7fuJJ85z57QMEdnAznH1gwBp55khNY",
  "key30": "4f4VND7UzPXizMWKiyjwLdmBBkwGfZCYDPT1LXtJBoQJ5xY29s4xqPPsaQSQNoiXz4GEjo8fLyUxY6J2vbiBmxLU",
  "key31": "3xcER1GLevFH1b5DtCSgFD7FcCHgv63jexD7EkimjNUhQswuyXkU9ycLu3Vsrs1GshBX83GtQNy67FQk8drXsRES",
  "key32": "5guHiosQUmTESWYYESBZ7X67S4qM37BGF5mRwbUU3Mmr25gZ2gzd2SfXhYNC1HepkcUyDFBk6kLmoYAPpEq8w1Lb",
  "key33": "3u8xoc2AMyaiqzCtafP6c2roCmt1EniJApbPh1ntuWYWU97SWJCVZqasNZVwZuvZ65ZB3vgDKnERtRCbTLu8h1tz",
  "key34": "2nEFnr51TQpgBGZmFTcQNHSPrdtfpSk3NAnNRNjWeb3x75AR5C8R91SfGkrUYspB8SXMXBixht9U2HhvQuRgZ9GH"
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
