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
    "3EY6AzUcxnLbSwKYgFC6sqTeKFABnjo3hHDDSgrMXU6neU7b8b6Yt8A9KYGs4tCjGs2ANBX9CUKcdAJhYeGSUcdL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RidbwEU57uTqnu19n6utsJz1FPDSTZ3USwir8r6V2aBwKmt3hfHc76bkGRm4Mko1P592z9EDFqs4iWBHMrDuaT",
  "key1": "sNBx6Xr1dMpuffvuxWgmvtEHSsv4hQiZ94jis9FCehXt2ze8knVC5bhWiCUHFsfTMj9RnpPfRhGYWeVt4q914BN",
  "key2": "AGgicMMd2s6hv3ryxbJqPopFK2FmSGUnv5ZgfkXzFYEzLL1sqQnKfwJoGpAg4FQ5GHGbiSUdDUf3qe95KU64DSV",
  "key3": "swujgr7oL8Govyuo83vGQH2KpUqHtKyVH2GenRhb2bnCgTrRokcThRVG1JMn391MRzu9KskKxyfZ35SYrzaRREC",
  "key4": "3SiDJmGCQQHQygH2avo7oNk1pFShbNbybj1BssLDDexVQF4dkkRrwhC6rGs1aGCJQoYqEHLvA2aQ8yHrMgrrfgxJ",
  "key5": "3WN8sUpSSCcDAqEEJLtrb5LNJbRr4MjVEn5TAM7yzJjqhWMqBdGYMN7dAhqpWmhHvhQ3qmBBpmrJUUZb7GD5AL6X",
  "key6": "5xZ6npnyu2h1TsnNauqffM6jDjCCcikR4zPcpMRnhPxfp8j9gqytKFHh1KtP9dKEMCWHFBpHgyxoPAwskksXtozq",
  "key7": "2rn9bt17rpdgvdeHBDX2g1h8YeD5v1gxaBswyPFJtZx2PNtBReWkgKAuEhnn7VH5S5A7FjgTBAvVpnypuknGhnsY",
  "key8": "2B359BbGPC6XR8CV77Go8nRyK9kHNe93misdpGGXJuqWLcnMJRVWh5Xhy8VSiHXyfZvwcbDSg6xJVyocot7DahKP",
  "key9": "wJ7c9aiKaejfSF24iNF3dSxjfkUYEgr8sJCm6xudvkd32DruZo4XwGrT37LWffaV3LJPbWRZgRp6c5WTxWnmuUA",
  "key10": "2YURp8j7DVXCBeDADGr2QAm7rnUVd1pt5Vj95WLwAKKD989eukv7graXN7GTWSHao1ZKMPsgWYuDPxJijjycyYzu",
  "key11": "5sJMtZEfM7zk3kN2emhmRcMuD7eLsZPSYrk7wXu9MChQ7B6RbmMY7wScuqpmqGb8TPE33M1QGE6e6Pqkv5qigbi5",
  "key12": "5WpGyCa3g3eydGvB2mtaN9ZzDrpnKYP9b9UJB4bfrpHfx1LzXWy3gNG22YeAV2E1gJVZDGk7KMVsx6PtKciUR1K6",
  "key13": "4Mf8NBV4VM4Speku2dwGTDrqzVWCwDAwyPMbEerVRDeoerqYPqt6fr9jZFHQYwphPc9YeJs7swZ1PDWAhGghYqjo",
  "key14": "4pgDnd4ariGxbpw5JkiAVi9e6PKJS4ckPkR2d5WhCX7hRtzW3wugyYANM4PZ1HDEd881QruFSvBem6aNLMMcNp64",
  "key15": "2XaS7XNS7S9pQ3EtUhPF6BkscDvXYhXzGqPs2gvfH3p3Hko2mFFzCkvYmLHoS7b5gzKhSqhAyeCa511cRTHCfj8A",
  "key16": "22dqzt1zi5rwvxeQD6yuzBR6QeghEgJLhQj2Mb9K5UiVXM5bvCPfTefPBQy6Rzzg6sjuuG8UsGLWkKUMRHx57Jer",
  "key17": "3uFUN8iRJrpsMZiJ34Ugi4PKRBafpU2tCsmtVB2ARHm9aG7sRnx3h7CLJnRWVn2GYGZMSvBjdBzezDn2Qc7KuZRd",
  "key18": "5PPrAE2usL8de8xcdic9Tt1ytVX7XQfW82j2Gbr1DaXR7AiDZQ7dD4zNdWPYcqX2sHz27WsTje9ekn21TC1QQxDW",
  "key19": "2cWKDFrvS4xM1r8xcmWXaaSCr8VBaAWdyi3iPN7ZcEQG7pEAD7KV5QUUBy1uyzjWLRrNdmQs3GSRYVWCUeji4MSN",
  "key20": "2CohLeBv29SLWXKcMwsikGcbUnuP4kAU2sG37vTXWwzVxBZwFmDVfiebp7pPeGoDrnQyhCczAEVF182Q7SPHYyV3",
  "key21": "3SrS9LqA7XFvMLsxPZHJ4cRBmjU4rcmz5eghSGXwNPcNPW5qpM8udcyagodcLT61dzDqQFxswqn6pMGd9vhmUt6n",
  "key22": "5wkdxhdGk8TwB3xptB1YLuXGriWPE371btsGDXgJRzb4WsnK9sJbaKJbSB38Vtctw71BtHtFNkgwBzeQe2XRvJDo",
  "key23": "xvzvQB3NLK3KUSUB6PwjNLTh2FRF8zpn4aCQP4FVZuRXtdbYNd74dgvXaC18GRFiUM6nqBzT9pL8VX9Ypzmb9ar",
  "key24": "aL1Gq8kEBrjJKzuPNsCDjMrJFYeDjb3PuoWREp5mz6AdpczRdwbHsJwDFb7nF1WaPSD4cn1oZvhaTdacVYNuMq8",
  "key25": "5owXoSfpQcPP1ZTrntyS4K89k9pe5ovnek8cyBGm44LNh1eNpEtTzEAJhFSisweESb7Q9w6HQnPvFopB4utgkvwn",
  "key26": "2d3cx5XgaL4Pj5dRhSm3gekQQocuYrYZPcqqSGHDadnboUGPqgpvrXSXyEbEoh8BUAvEyUjMNyiMdcmH1LocQQJB"
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
