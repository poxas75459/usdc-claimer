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
    "3hB9SoEppMRBRo2S5v5nnuVEdSE1FEHfdmMF8binfwPHaYkfDcnsjbWFyShcNG2nh21y56sRM6BLRsr9CXMhKCWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GxyMTtbrHuTTjb36MByV22S2BUgrXiqrXUrE64mzEcQceipKLyk7CvbhAFWCeP9j4EDfoyNaqmRUiq3VZzvfLn2",
  "key1": "3xuT2p1n6Xh8WQ1cGHKCEBBS4dfLtXyx4RAcn1RbySdhXUu1mcZSLMjfctcMpiWFoStDmgnBDJRFkiTDfq6jvujF",
  "key2": "3BT3i6WCGEYezq88sYDDoc5UTuSaw5EiCZ2WtwEYJ6fyDxfUVW1HPCog6s5KzLkYsRC9VSBKEkjgJpTpmheEKx7m",
  "key3": "n3Qs45K4prs6RsMSfc23vgf4BpteKSLVsLihYzbox7N6zsN3koYUuw2uvSVNwpZnQMKEJvmGdNxVfvm4oLxLG1m",
  "key4": "2kuPUK6djaaMoLEs7c212qgCDmwBcmYcmYb2mRmFGHFwFKaUi4gGnGAZfbHaupDjGD7z9cKrfj73EewktZWdiR6G",
  "key5": "4biGEuPtQh1s78hrUcNfBMPViuFfLZcDnzzr3pWjtHHaDC8NdK3xD4A39FonigP1kqfovwZe5rB2MmywEzdqMz5C",
  "key6": "4YCd9L7SeU5Jrq5NYiG1JPxr5o65QR1xzL56QoKjEn9YXaCybymLB23f7vQMi7AfsnXbSrfCeydB3MUKpN9BHJnb",
  "key7": "4EvdS7cHuD95XCN1zrxg5NgrFZ6SkuHu1CQxvfyC3SzJyeSRdYKG4UgKiQmTL7wUdHHAduJBSUHUrVrFSqwdzn6U",
  "key8": "4MsKfUo4uSB2Jj8ayn7Jawnmxv9rKJyc1cBQ1VMEMtpHmXJtfhWdppM3ja5qpXDy9hEw6gaF3bzpK1tr1a2xSCAB",
  "key9": "3iPoauXkTvmsyDGb4VsH2YAWjsUqPZB8z56iT27Yf5v7awL7kdSPM3yyVPuqtUsmptJSGv5FogPWVwZBoJmbumWS",
  "key10": "5giBEJDSR9ADEUb46pGLw5g3rXEj1KMFnwLwGCv5VsxT2TLXVzRJakXKf6VhMpGSB2mdcuURP88MypN4dtTpzFgg",
  "key11": "5Ff8KbCrGBBjDRNzJAAGgZFJSqq86sJY8Cb7E7JQKotAeXd4FCtNSSMfDvXsRvXkdpLuvXJA1EHQT3zRLGXwVC1W",
  "key12": "4aeLgR5SaHUt35QRkanRrwsMRt82mSBpTgc5ojMgT5NB9nwRwPygp7Z6cFuFjXsdHTmgK74P48iFbiY9UeffCouq",
  "key13": "5VdnwMpGqugTpqHCBbR4uuNg821vjPT51Rt856qWaJfxxdfG4B7m2PwBsVCM3tcjJZnogyAvigXXtHVv3su1bBPR",
  "key14": "WeYqNRuNDSrhGiuzixXttMH1qW11n6L7gagnaKke29GW8vK5UCu52PuDPLFYUaT3BCtGYPaL3D5Dhid9MDZdmsZ",
  "key15": "4HVeaMGzLmf7DJrFqKE1UhLP9xGR6VM4pnKVKCq4skjysV1zAbEFJdxD9KmQU5mE5pdD9WGWQbsrNeK2UTh32z5y",
  "key16": "3Zg16TXmxG3q34i5ngReeJCmz6BXfTBncWc1bzSrMEAgq1KyRdydfXnLH1mLx49MwVs9d8SYPfv6wLUccJDVQSMX",
  "key17": "2zzKfxf8s3hD5Mm8g4S9rBVhYqBF2KiKq86PeiedKCkfTHdetKKZ745nSDfGRzimVvfNqMTo7X7nk4yyTZ8UbYy5",
  "key18": "4dbrc1tJXuQ2xJD4t4VASNvyYfptPoosawQ5uAXzTBukeJ1CEbnqzw6eiRKUQByscgaEy97E6XJvaGyqcQwQJedj",
  "key19": "5UQmeyWfCLJ4GopqumPYKwyQS3EbWT6fKcpXRBLZbvWRPi2czLAgtHbtB4GHJMfA56vMWCJct7BYTJXJyHFT1HrW",
  "key20": "tsrXfAeUU7zVmzYTdZ6U6U3mNTLHPRiSLPoNdUuhRVjSzd8pKBk2knDUKENf67mEcv1HdfNwnRwDtipW2K6Ess4",
  "key21": "3EKwv583QaGgmnJgVxXctLXVookTtP2YaqeBJMi9gjtmDbBeYaf92Xwd8e9G9jrdqRqxZFvsig6Th9Ye3qXTZf3j",
  "key22": "DgT2BUiNxQndkhVWXrQoedMaXKp8hXTM4HMmPsWBqDUVcXsSjNPWyGUa2wWkGA3fVLPzdMcHcRbws5Y7mAHynY3",
  "key23": "2c1d7NEgmS8yr9MnhbAp2YoooncxZMPsshQcDHTC3B4vT91mkaEnvoYqk8DscbcZLtDcwYE27ifLmsbmTkM1mbAC",
  "key24": "5eEiWd6xznGtz2NPoNy9QYpQwBnpbnsn5GbX5p1SPkSijE21mTtMZAxCn8UP1GBCfmYnzEVymG3cD3RLU52RQQCx",
  "key25": "24SCdZvtZRGE48Tz1JyrQwbQhL2eZhWuixz3WziP7ciBnVSz3Y25vZ5rEpdYnEnAunVG87SNG4oCGTPQZ6ouoWfF",
  "key26": "4GqcVzeQ9kMg3xmG27GCnxQvJeKJ7RPcdhDacHfTG358rQ2wyx2HDqxBRDpqMBEUXQzZu7y3WvGgjwfhuE788HfU",
  "key27": "7Y1qVghFejF6haGmHrzPT31ndAJ6AVkqqErRTbVNBZwEBGTAD2Y2eXEfc9RK1iNu1S9jRSqhG8HRn9x6DPBj11j",
  "key28": "3StxsJszgXMCj52vezBkJwMHkxySwnYkLgp1QNDzci6fpoqbjnhVUoQEAjDYMZUZ92Jfojajh5mVdcWQXrNx9STW"
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
