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
    "5M4y2ruDtttPufEfTKpUVi53L2eFSHiySY5DExhi5HaSZ2AqNxYUDKzNDBXvN4fk8DLSEq2W8Qm9pUSDbhs9dj4d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YfWFLXPfYspM1rqWbbwxcnCisGtPYQGs2XAxMQVFnTp9YKHWytuEqkGMqc2oSCEB7mmzzqtgGTtCNBaDffPopHL",
  "key1": "3bmYCZDMDE88JpNjBzcX2jz28hhtTbCzYDNbNzD1W5ieKngucG8a29aszY5F5TPf7Hs6Ssg4voMziejUTarqbDfo",
  "key2": "2NHtQsJKD8T8inssb9QMZM8wn9a9sqaXL5FXWqaSCq8PBb427rWmLk21kxP3N12jnFb3NkogFA52qVvG2ALJ9v56",
  "key3": "51MQ9CJ1YbomubY3NMMbP4giXDkGJN5t6GEmywjxmw4GjidC3KryStzsYDgjiWxLoq6cEYdgjzVGZACQ2Ddh9YKa",
  "key4": "5TqQECvAqrBqrVCi7rpSaUNjNeCg1fuqQzku9fYY3JrZG7fDynDg8Ms49oJkjo3T3FiucAmkEYCmYNmBYsSE8bij",
  "key5": "22ChqWjP9YQk9s2TAgaoZvKWeU5HwLtnCjfG5JvsVdXVuKzmF743ePfSCenKey9TuSr7rQAc4ZSfikYKRfZUkLD3",
  "key6": "vV2663MqSx1DwtDckLwN72xuFKcm5tfh21GvLCUEqMTu49bLcWPYCVMm4MwVEpndnK4KhEDG3KKjDuGN68Fz584",
  "key7": "GXQRZHBfVjVvQUnkNZxLNF6XyAwDdBdNhropmMv9wojJVciphDoUahohKJufcvGR44pnddYu91b1cL5bgPquQox",
  "key8": "56hasVZsPGMBpR1nWctGL8NRYhZjavajeP15cayPak3yqqdi1AtSR6NrrwV1VQPnknrdCScMw4zG6yUB67jd6inJ",
  "key9": "5PYKrpAaqnYHrCtshZMsRuFQFxiQyk7M84VvJ3whzeXorURxzLUP4NY6MYhC33QrexGN1a7AsJY3GdWZ5PntTxo8",
  "key10": "2fRuXxkRvJaUxEPFennWNjQuF9oNjrkG6BkQbcHHMunP2fXGXcASNprtc6s41NcCvA51jbD6Vd2SNqmn4vtAAocD",
  "key11": "enEEFK7tnMPLKFeRQhKbXT2BYQgq33ckv88VtheyxBKatZU92h4oGbsB61PJCvuZPD948WhyD3oxpj8cguWvKjk",
  "key12": "4Nvmnh3dQnHqPvwvWxR2WKWPVEehotgdoq2iT2XgxW6q2yXXWgkKS8LtLe2CZAkQugktxGWZ7hBFig1WdQXSY8HH",
  "key13": "55Ce6XGQ6HoVUhAZU6CgZhYSKuQc4GRMs672dALYqmH4ticfmBg5mN74wM4WZ2nukeJdsJntuvGVm1a8FDBhshz2",
  "key14": "44wGAcTWmcnd8gRRghupjvsVRy9ccRmN1eMu9eRSqEEmNpTwP1PS954MhZufC9BjiQ2AKR98ob7zGCounKcy6zP7",
  "key15": "3TDNnCWqPfm9g7QsRAbUXmz54KbfSWoZBHGDSi8hfbDaKttFjFhdpNkd7MjuhykJg2W6ntkxYEstFatmjbVk3jbU",
  "key16": "2f122up2uN6uNWLodDASYKfKLP2wnpjrHLpT6TFrZ3ZbBFyVxUv5WvU5hAUxRpdNva8MTDxVQ4jU15VbyJZN1mHB",
  "key17": "4zJVvCfZMh6BRRRZdpSCzcrPwcDKsHiPzDuz4cUSQMnHPBaHf2EXNj5rzBgATueV6M6dzUmcq6Ekfk2bHu2WthtZ",
  "key18": "3KkkjQqQ3NvzyDiptFG1sNBejKE5C4GjmmFbGCTKpBDgeuRdw2PWKLeahK14F9LppbUj5kFTMgX5sgAcShnZ8KEm",
  "key19": "4WGvxRmyfbLFQ8pUEH65whcczXiURHe3YkfTc8ujCpdbGb1JX3LtWaTNQ6BQ6yrkQRgZedb87M5J6MT3ejxMzaeN",
  "key20": "48LFfxtRUdcqRiJuxvbVt68bqrwud4XgwAWqUePvRYLcafKpfT7eTXWQy7hHV2VrHLRbhMH2NkX4peewjkdXarp9",
  "key21": "3q1ovHWe3iYtjKWKkbEMpwi4443WD1j9cMus7KgY46ZiEVb6PWGXn8GdUs9efotSzHXL1DB1Eh8UWCoHE9hCyAEA",
  "key22": "25Pdp6QNAMmXSpmvLydTjn9FZivuJvAayojsLP6mpP9dH4UwwnB3KvrWhjWoamkqUnWAC7j2amdj6StoPiPeSXa9",
  "key23": "2woTNdWDEEirsPM12Gs4UTTMMkcBVBb22HDzknwyUfo8MLcLuyqy9WA3KvGaRwDbPc9t6RwMogCgSjigp9fSS3Lm",
  "key24": "5RBsQdvFKVD2ZqSPgxLaxCQYgvsFRSezqFMgYUhbECTDFMJ4w6HMGDvwjokZBSqsmHSMJ8SYMzQE7cVNJcjjcwCf",
  "key25": "5uaPveTPUTjGHEYZGAwE6BEEp5hCioQCEynPZrmrj2wXKsXKodKC3Q7ymdM4KyQ8V73sZqP7L1xCEuWriQdFP3h8",
  "key26": "5WiL6tfSsaJaoXBGKYeW6aeiWGTRx4UfL1tmAymKiN38AGmb8ZW9mtoaNiasD1cjeZ3vd73ogTUAoNFbc16juZeb",
  "key27": "4QJ2HxoiPCkYD87Z9ozgqRCgzVefExZjyqM9KAHJ6fdvKyfjPHCw1TuJhzyoPDszEtnkRrhCQLtPwTKMvSjKsNkP",
  "key28": "3fMxTBtVyrD8i9mE9sjAT8mr8D3MsnDis58vkNu6f4jPtB25yjaqjfDgGNweLmCCP4hUYZhgETUnfJQX825QpUx7",
  "key29": "JNzhd3yCo5g5GSiGruszG3qnHTVp3nkdSkqcyDTS7UfMe4aHMNhAjfFMrLJhWp9DikuUdmAQ4UMCzDiZJQ4o5w4",
  "key30": "4TWFBwJfK3i3PBevmcT6jQxu8o3zw6FvqgKu9oVdVNfq1V1KnvngbzgTtE5FtCoQF7SQV4aARrizLVF5PaZu2vUf",
  "key31": "2FxGnM6mneedBQWz63qdeijkKzbwni6fFaWvLX1354cKX9kgRwRgXYANByW6BAGqoCEKsvHoiHoh8S4UQsFX2Ncx"
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
