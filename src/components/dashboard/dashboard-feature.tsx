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
    "3TnrpxLmFf1RyMSnaj8vdRYzHZeGrmcctGYKniFKsqLyEdCa4UdcpdZ5WakNPXRACywxfUj6kHFoDSUJJtibkrLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAus2U778KsR7Fyohd7DK42pdr37XSx7PXm8frukrZ2Jao9uJRwoHiMZScLgLkBoyLfZPVQ5yM7bq2FGnTwCz8M",
  "key1": "362V3R6AEKJ8ru6aiH6yECiSAoGqvEVQ2FmE14s2hXTZvx646SjojVRXoZFpJfT68PANfn7AyAdiVRgUMUh7pAbe",
  "key2": "2VPg8Lcz1muwNUoH76rmUa1KVANq6p8d5dHU7f3oGjNAKebPz6XThXy13vbxMJszK4sMnpcC73zRkGfYx7rMtAaC",
  "key3": "64Q2BYXZ9R2hs36jkGMEdh3YKDB1ihGazJ5sa4qUdYDfWz3sBfKevPVhbWfnoNd7iLe1hM6AV6RjZQPVFAgB2RxR",
  "key4": "63Md3acaRy73VEG3GwWa4gWJQqbdNsqLPnA6VkUFvvsE1QfkBCTzn37fKsJSF5vh7Jf47QeSdjspeypEJmKwa8Ne",
  "key5": "4MsqzV9RLqNkVbMvcdn8iDnqotoEhAL4LfhWJFaagPyogWEognuBpHFjQ73oD4TBtFS1kwUGpqf3h2Xb4r37HxTV",
  "key6": "3Jo28PVJKTTH1uALGSckJsJN1nCMuayQfdUhiHkZZAtZQAkoiVDY7ABZ4CB3aL8SqN1TSJxt1uv6z4NBujfNjEPs",
  "key7": "4Ux8Wr31XxxMnK5ntVMT2zQyBYmWADJSmyALVFqo1trjfndMDSJ6KqL2p4SuLk2Nns8GETT2cbTciuYnTSTLfzMu",
  "key8": "24Ut9AnriRLbogWqjJrWe3s62hGt68kS91DRQASmz5UVt7yPXxNnRgZ2ZrbuzUBGxToWbXFtc4Ujgx7tbuUWTMC4",
  "key9": "2beeVnK71RD47s1eCmUHB2f8zCuemA5CRqkvo4AmGdZ1efZZ9syxhmneziMZJ3Ke2DTSP8DdUsLcv6f4HUow2moT",
  "key10": "3dv7C4LUqjsKjZ7Hi4jiFExcw5AwV5nwZZgWWpmj3z318vEGtVhVZXGacKDj2eQA5rApnJFt5zG5Q66AxNhczNa4",
  "key11": "qC8vrWwTwecvvadL2u9XcwRx5XhQHhFUjiEsWPpeEPCjSKAkSqDX2RK3K26HgNDyHLyAsAWaPh3ocMnDETweEbx",
  "key12": "AHY2gTpCTioNPy12gLjq86zcVZAuUh6Zf3aMamaJrxQAnwdwETKHHKkcNeUkK4izcQ75hT6kJ4Zzzsn65WxWizj",
  "key13": "XjBPWfuQPQYFzM5rP7qMT5QKfUnodHBWJ6g8TmkEo6ahM3gjrVHgkg2bNSyB4KcEacNbCeyMdXW88ZLFGJtLZmE",
  "key14": "46zwDSP3h27KasYG1Udr34Kokh6kDsgBNEVCFNCoVVPmaYkgqDMrWyUkbHBwLtHF97jfFJPVipDMx2W64ZaaeSDb",
  "key15": "4nHK4cZgVV1CMov3HDXDgfxGECxP89p8nJjZqRqwRnmHzax34GV27o1zhoZ7Gg5TfMm7AQGr1iHW88p6WRusbp45",
  "key16": "5j1jG11yeSZkPHCQs3xGHJcHUvNr26x9PzvyEZeAAnjQHMrUf13YwPjbscwh3dgfvLtfMuq83bqRNp4CMsVcYzS5",
  "key17": "2FTo2kELMYAhmCnn3T1kkYJCVwh2ex9aTBTBFbXz3mHYd16NMF1S23ztfVuWw2AXriz4V6hpZiBifbQ9ZTH9qpiR",
  "key18": "2sunvAKjEYkxLLxSmH8h8jzhBo3hHbEXPGSxdFbpVWW4jvsW8VJfbn7kAeqgb5Dh21KLPSmVG1ZPrHRKBSEyggZH",
  "key19": "3Ki2K4T2BnRMLxzoUa6PXWWRZxwyikqheVm7qQjnAkXRBGPL4pdHTKw4u4VztFnuMo4LtPZYBK92UzPZhKn4LY8H",
  "key20": "5JcGRrpTzPZju22r8YQ9PXGvhidQVDBNys9YcRgcUYamztpzLGKPopiJFFxfxYzScV8bFEDnq5QfQhvz64wKjUkj",
  "key21": "4U7ntRVr3KGVyJhguus8yQQWMKYU8BUAKgRSPktpZJtLu5J3BS2vhPfreGNcuhWjN1a7LAGStPbeWYTjb4upk2GC",
  "key22": "2q3YNXY8DvWFehz5KFKcZ8gKbXW1xEvtM8v9iATJQ2H5PLhbxLCSzqdtAgaBwvb5cDkfMiMeW7697xeAANZXf2G5",
  "key23": "592iCLwHYQNSTTZQGogLH8SHSDVTMfpo5nGRty1kZB8HGjnwYkvSyT5neKEZDoiGfusjMtL9gPK3QCFS4B4YJi5A",
  "key24": "4n9rE6QyDDDTUaKUSNkeNUfk6GwM2rxbiLiwJD2BtLotdrLPqd4tVXoNcN4JVCPiAQU6tamCgjad8eHA52Av7nVC",
  "key25": "4UnMvVBVBtMUprPRng8sm6HWtggxLjF2mV9nXYmzwzYyYGhfr6HRy4rG1L6vcjMPNWg34JzmqUZftQHDaSFkDdiT",
  "key26": "235jr2GqAgu7skNXxQXKHgRowC53t7dnvdTbvioF7qbGajotdzoDTiQ5hskUJDZ6uyjo4LXdkFJW54nwf5f5zwS5",
  "key27": "5K4hLiK2QhNAKgbuwPq9LWYdDtcx6vSw5ouVcS6P9QsLjDJ3pDvbwVxbrWNXeopzCA13jDQPfZcK68vVwPVgV7Jf",
  "key28": "5ACSmDVrCDifsZ5XkrWDimQ9udhWyoqsZqXT3AqsemEG3MwAonCw1bZ61Ds4KEGzJC4DBK6RmmSgMQNcyZireMe7",
  "key29": "5uo1Wq6nz6u7EtMecyDhAmgY7YD6Rvh1mreLjZiLuWrmDoHKGVvwTy78S24TSaE7P6VNCkbVB3ZC1kMjobPavp9A",
  "key30": "2gyXFea5KKiPksfqwBbecXxPVVwBX2QUjPJrRRYVgn7ZNC3yKt1DDFDHGqeHFsoQaEv2pKk5icBBjGG61zimg6Tw",
  "key31": "3fVyK6NfqN7L2AacjRmUv2NrmGyp8PGSdYpxJUoNYf3D2WsX2c24LPUWc2Unt86qx1FTMPT5UY9kM253jXQG1bhz",
  "key32": "5o2rn8PdrUVtRns9DTNYNpw6DbvQNyCm5jgTPHGXBUYU9P4VqB5TH9gEo6QzosJYEdAd83jnmczK2SmSTFGWRT44",
  "key33": "uRsEBFwVfFpss9FzvAcG5oHi5vePV2avxau5GRv56fMND5rrRqWCEFL7GjXwJppZuzSDbugtnrEx2hAzZShMKn5",
  "key34": "4tDbuST4bcJaSM3rNr6bbCkYMzZDQFa5ucCKtHGk1kdFgtuLhhF2siLC8juMgfNYgq62AdfXcg8P836pNqbJeiUm",
  "key35": "5HFQusbSTJPziCrtVE6WCV7KLSGGLY9vAuyrV5jVD2U54rw5kJ9foHki8DUNySruvhsZhpaPzbfZsqzvRVpf7TTf",
  "key36": "2MMZo5UjUbo6Kn5pLTkQ4YUL2wUN2BbRmhQAzkTCdPJhrM9W4tvnzGJTonTHdakjfvRXHeXAHLie39X6SHkD5qt9",
  "key37": "sKeffBWurvuDAfSooU5aybF9FWDgA7RUzdb7fYcYngEkMMv9LrBcG4wVs87LeNze8hCpu2AoctyFbfmmK5rXibc"
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
