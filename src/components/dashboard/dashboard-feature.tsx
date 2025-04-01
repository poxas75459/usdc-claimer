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
    "3ajAaBpSWhBcro63Qht8BVYAZ7Z3EQMLNPzSCaVUKH7X1BHmFSyfGwMGW5DJDqqVmLBDGKMbFsvFpU5Yt4R7hemJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Yt9JhVmuM9z15JTz1767s6M32H7LmDUWdGJqkfujvy7564JxKSviGENG3riNz5ontpYURvJrt5J94Wng5qLNC9",
  "key1": "2TF8hMtAjzrbUD8orCQ3izLSomMBuRaQ7zdoKdNs5bNikV6sKmr5rGzZG6otbfGq6ek2c84Q4LvxYvHE197Q4xNj",
  "key2": "2ctqpxPtPn2rJ7oPruTp5PKchhoU1kTupgp6zt5cKvo7rJAcZi3WJVcnCf8B5xKLYh7aRzBQhmYDLKwNGTYrBo8p",
  "key3": "3jcvjMXd6xDJp1cBK5yh9kgCxYLH6mvEv8TnuEwA9zrrCtA9Z33EntMUvgVLtqD6QrpQtTQWLHfh2eAgBcW5vCrQ",
  "key4": "3pUJ8ZFDRED2oGduPQNZGvVXqG7sTMjFi4rtUmnWieTF7YTGrsKGXRF1b4DrRXajE5xug8kRLBoDRuAH5uUqmHQm",
  "key5": "4ic6SSFoCZ356yFzVU76nzgwaA6794dEkLag65znNATcuWQYfJddhZ8Cb6NLfS6kFKBhooxtSUHWbnGBdVuobYeN",
  "key6": "2GgeH99WNTkx2goMB8q2zBFkdeHHuYxUt83GaazofepZndv2ckhRBFWKyUzQxQCXfruGfVT3ipLKVKRKaMExaBbA",
  "key7": "45pM1NV7J4sv9RarqoRibmLT3tJN3Pk7sih7fosuKy25TYi2UyhfYdTLgVrTvkqt51TZGTGrsvYH3DVzHqanV3j7",
  "key8": "WPUAU4NcAhpPKosuRzbJ7hbCSp7YyZoGiPhqSJjFe66pqAithW5txunM4hZF6ckaohgL82bWuJ1PE7RdQZgknwx",
  "key9": "5dgeHkTtz5EiHmr7CiUWrEwghuiCCo4FZfwAjHJ4U1n5Wstu2Nu7VGftTjm4ssrjfkeo3Wt7kSEZ37PwK8UXLWFz",
  "key10": "5SXimg1yn4h6KwubUNPPtpqw5nJLf2wXEQv7g7gWXzxkMGGAVvsB74rp7qRs3P1MRpRcQGigusPrHpBFHab2KdmT",
  "key11": "fAwvphbz4kXLRrZRVWxc2NuhmcZ8VhcB2ffMfKafCUBwVjD73ha1eQ28HxQrVmkkmvVaafKSMDfh6AeRVVLQ8mY",
  "key12": "2sSqEy91QkM1kH1DwUVF4cufYe3XuECFb1zHQhT9fRXsWhpU3Rv5iVQaatcGE6brSHThiVkxj8hoRoKWPcqvmzYj",
  "key13": "5VQhif7N841kWDUSMS7XMapX2ibYwfLwW1JAc8XLjqVEYHfPhXYkKDnKhSf4ANQQUsQyEBHKELcbmTMiNGkT2Tw6",
  "key14": "2s838oLFco6x82N8PCvqvtwMNuLiC6dc7Hgf7Fgkg1FLdwPzTbCCVn8Yo9P8Md8FaoF3yD1xkBVNsrmzmvwcf99u",
  "key15": "3FskjDHXnGkFd8QeQL42ucugodZoxDPemQpfpVs1e2cbr9pWptoMqXNkSBzxK8RkNuq9pk4qZjCcRnJqdGJ5SfEf",
  "key16": "3dGp4oTnrTM6PMWAUDxDxvpx7JrzjPxoLoEM98sFw5xfyGbuFZQtP6rKB6hppCan1DVaFBS5fyCnyzf7w1MyeRt8",
  "key17": "52vKjAXQ5q9YGzJrKSHZSuKoBNLACPwfn6ihaAjbRu8N3FLmvHt6xBdEw3xmT5NW76GqmVCbqs6rascqZhRJAZFd",
  "key18": "pdMSewwNjesmGDR2nsxpHcC7T48riW2Akd964LmpfMGXY4LorR9YNGCQXX9W6wN8xABGjYAUETYE3kZy4G65Axu",
  "key19": "5y3k9W1MJADfndwCdigAKszrLMNARBpeFJJbs5SpDi1zWCir39xoz8JaEio9ZWjNcWxyFMRDeHe74DN7LV5WC2B6",
  "key20": "5bAyC34dHHQmhhkJgwP9dofUoSSrJUWV24JmVbHTxChRCXbRrPNSXCGu25Cnnd46t6x3qehaR6iuFRCJY8xP9Wqy",
  "key21": "59UzWFKjUt7r6WpjMZhutV4DtU5WMisoj9UKWCe4dCnnrfD9nCMqtu5kn3uVG1kTcSgria84DRjnmfkhHBMbEJy1",
  "key22": "3Ue2CBBEvwV6ude7gYEc3HvCoz3xYuQELUVdifVnMes1Spc8KEmX11dwudYviBY49nY4tfyNSFypthKYnBeXGEwW",
  "key23": "34iSQNAuUhNH1QUDZ8EoQWQBsfdPR6CQLzDVcTtTYGL2LtAaztfLMgprKyBpGLb51maPJ1E9suywh6KDyVNd6Eyv",
  "key24": "2dXR58LaM5SovqmJZjAhFwm3qopQNYRbi5Qaoq5CqjJZd8Wbx6UtF5TnrfphbHhyq9TTrisofmz8xN7GnFBo8C4r",
  "key25": "2WmbZtKwrsBrysjLqsJP7UTkLqPDUfuyZvBPqcZDNNaYvDMstJoXVpGpERoxZyKLLZLsVbtxV1255uUf8qEYS9PT"
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
