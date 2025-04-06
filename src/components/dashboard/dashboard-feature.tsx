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
    "232DwFSPhS2ekzTiDVd2DDsvBRgv7UTpLHZ3YuVaHpojgZ5F4SEi1QACsyQrFNanbrreGN3S4MRLDb98Vrnm8bJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pBthgJMmp1RahXgyhjYv3mRyt6nBWE3gtH9EgEitUnKgRoqLQZ8DDpfveWncRvsa4hjVFqWoqgt4U8okExmwSsL",
  "key1": "3ji6szGeb4b7r63fxerAnMTSF8cVK1A6zV4Ejfa59EGeWmGghRpR4EQwuu95WrtYnijnFdpZAaJiVxKqyS7kSPRM",
  "key2": "2XaDEesQ5rncnbewatqmhLTUmj2sv9WGcj6QiPq3zpyBx7M3RSoSdmZ6ub7CnSgxmTuH8g9PZm7nDyHh25XTGv4P",
  "key3": "2AF8GB24nzpCDnFGCmQ8prjX356gX9YXwCqZ3vJDfrpn1XQSkUVm5La7m8ZNWF45HjXUpgGYNBUjV351EFSouaYv",
  "key4": "g6ipgG6PCH6XnYfUvyChV7S1CneYPwrhe95BdTR1kc2HVc73KVUoK8vYZDRyM5XgeHEZ4RAanCTAojQ2adDC2iJ",
  "key5": "2fJDLjNyvxqMkTEHqwMUgdWp1YpoMxqYyUPNNYyXxdmSeiLMwXptZJxsfGoypyPLyzRNcm9C3P53UsxPSCMKdPvV",
  "key6": "4wLQqRk8EoYpTdKXwJASdaUAe8XEitJR5mJHVyxwfV2ZK4UQVft3UXKcCtaEtk5UXASUboKAmNQeW6pbZdidTfkt",
  "key7": "EAWsr4Xe9FiRrsEQvMFfZJiEs5y1ESHmrZnda5ifehfHK75oUCgnGY8nrWS27BLkggJAToJ39aiSn2dC4ut1pe2",
  "key8": "3sZW8HfvEoeKyGphvpFbtGg8RmhZyC3Qm9niCUvqETuogWZNunWGrgcvb5ko4UEvBtrjeamEc1Xudp2uZhyT7jCu",
  "key9": "3W8CWgGzLDXZ4Q7PGJCV1u63YQY3fFzpLW5KyJKWTRiCq4Lv2EsuuxcBuzzejuu7nj9XR6n1bFDLX2gf2pXeBfW",
  "key10": "wSVbwwRQaQwRW2DEVisDjAM45AcPPdvP2PjiSL5RMVukXN2PV5CEjhKKQfKot6xxsdwbrVUPvfKrr54BDTYZCEJ",
  "key11": "317CeHaKn9gc2VYfnAd4kdRMkE8XSpgWvZsNa4RdwcicMSDrzf6PH61mXdYBt8fLvfUsumkoNvFGPpXVKU3xTjMG",
  "key12": "58Jz4aa6k6xiELpfDVKyN1Vf5JgZTqQyDhFCW4Lr45Axt3ewifWPMamLnyz8cypCouS7wpt2ygnZ6jup1KewB8hp",
  "key13": "5fCi8RZSex67PVVx2yrywLLoR3SNKtytRUQ5odna8swx5J9tXKx5Jxu461CaeBvrpufcZQSwakMRe2d8ySxRe2yX",
  "key14": "4z2BNQQuai6SXS6jjrv7r2bqwdfA3jhrAwAehfMDWZfgrdmCAoPxZr8wZa66A5B7BwkbvGTZwyZWMhLaftRPHMQr",
  "key15": "YWBVw8AofG8T9fk5GRZtrEd2zacCSjiktFnPfcXUTycno3bojsuQzW44dXNFsVgUTizWTvMYzmVnPhYy93NdEDw",
  "key16": "2nqPyhBGGjb2oJESo2vkxh1r53oSexkn6Mxowjr8HceQREwiwrwsxCEZ3S1bvjvdZk9Pf482nj4r1ddZEcGD4hHX",
  "key17": "3iWYLwQB8TNG5rnvmdYMPwa5WXYPwasfck843RDWp4vCEbzZbsR5uN21j3dWGPiPx8HHfrSQ1AAu5SgZ2XSdzfvt",
  "key18": "aH3osV1UEfTsYny2oX4xARPtn7cMVSebq5BKruS4nVSMAjJe3etdUWtAyt2J6VT1AcFTMCPddcBGxjTDejxPJKJ",
  "key19": "5uA6L97RhKb7xP2ALy8rYq6yUsoH9hPmEuUk5Gup1dvGYMdJWfwRLA62joqNJdheNpMevPrwyabtFXCHsPAwuHzr",
  "key20": "5eHELv6meQSWUfjfLHFXa6sbfVY5389B2SawkWVFo73dGkJYmjcyi2zPMnNimkv6z5vwVNCYZSGa4vfUYGUCckMU",
  "key21": "51KcwoRVQBfxPJUGHcBEjbP1AUJ3CrgHaB91UtQbytoTEeaCbcbwth1V2BQWV2F4Cq44Hiy4M2V4X3q89UmcYUsx",
  "key22": "2LibFP3ZxtEptox8hNrdYNSpyhp3t3ZAAEGCuoP8mMzyP5jjPnawqZnNTe5yMDh3quA1kVfkDyhVDK7H88WepyKh",
  "key23": "4Xkg6RzsdosCQ3aHABvsGm4i1rpfitm66k5B84wkdxFzbodWHjSCZAtp7mQURRGjFcXTMRkeaESP9TDoCTS8fqiK",
  "key24": "4WfnXL7RRzK4xm7LTospbXTzXebM1U1aVevQGyfem3HSy2P2ARsi8YrP8jcGH5vQjVKpaYHSd4xtRHFeerEhZR7r",
  "key25": "2dKYQ6aTq8cnBKJK9EWFs22gvDJ9fnSMLNd53cQDnmdhxrVKnsGVh2jHV5S3oFTqGVm86Smc7FgKaxbfMZHnRVSJ"
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
