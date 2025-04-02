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
    "5T97LMKaFk2FDtGRRnekRpNdqrxxSUYhLGwaVXSSc5Awzyk7gVJe3mEtvnow6dLQEgZoy1cNpnjZZEjus2K48o6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9sdA1pmWgCf9mqk2ChRgbJUHpKKov7eT2mFTmuBP3LCrRbjuvUJGRKs5vWR9myx7YwpNuFYajbetgHYkhgKUwi",
  "key1": "3TPfdxmduU7Pr5jhvJ2uHpJaFt5TW86VBerJUcs6zZNkGQCva8BTw9rNCR7NEDbKicmSsQytDdGKXL5ToR4wA8J4",
  "key2": "HwATYrQzCNYm1dRyR6WeVc9uYzYMhmUAaaU7Bsp8f272CnJN18hifDNVnhj1jwTjyqWz1M4WJJUK88mbJQr2yC2",
  "key3": "446bLLRMYHDbUmx8UioYvCCXRJXV8g2ZB5ocGoRotYFTqd5cNdm79SFHU3TGPFJMJSC83Q64VDMCLqpbWsGApSRx",
  "key4": "31ctpPKxQRbHmpMKb9gTHwoPBcWrXxKpy5eqzSy8iKb6VKkMowykby9jSvQwVEuF5RKmDJiyC7fwMzNr7aG8Kzm3",
  "key5": "ZLivk7zQoGjp4mNLTWLcKRZKabE9p6VyDCnsGKaRYL8ykiPVus5N1JA5QcyfpRUBQHRwPNUn4XspHLwyhHjAQXN",
  "key6": "4Btr8Dw4A9fzgfhob4avSpCeXyBpbrFBJmC2MW89CJirqdgenRZdG1vWrzaA6KDje7M3hZN68MmtPFz1Ex5trmep",
  "key7": "ZgSmLKEBefAiHn32tvm2qAgguqWrvSsYZUn4yJn1fXcjpuCiZwgVfpXPG1QhT5wSbuaMmXZTbPpqKuZUy9UCbWP",
  "key8": "5R9sGtZTa6DuqboKmcPoJTjZEudg4VHPd4HJXiL9mHWBxiyfbZCJ8ypTzEZpLcGdCd4XphjxyQUY9GNRguSK722b",
  "key9": "vVBvW1z2uwRrncPPmh3oWP49tE2h8FDxHjbV6YWDbR3Y9tcNXFDeodTLbS9dVM4pfPDMV8MNF8deVyijTAeVF1o",
  "key10": "3AeDHW3QbK6KXymTasGbvo4V9qEUhBgWyyV95UBVBDF1X3m3QPQtHxNbYBRRg3e4gv4Utes4gsgmfTyQi3KcKLDL",
  "key11": "3yawEu5dKfeaDt2upkXmKWXPrmv3Ze9yBEW8bcBwHgjoNWvqVtw3yB9LMGbvLRhGim31jGphWQL9zRWZfaKds59S",
  "key12": "4W8CohizXdstzn8qkQK5ZVe5Hrw7csoNiCTwFn4PcPkqDkAVddurVDGDSBQ6S8MLfKx3tw1ewT9sWfVwCGAR6AKF",
  "key13": "5zgXdhzYgtVjAWwm6PWBmo1Lmbko6yMzERgrgmKBWBXsS2PDn19rociMqvcrjiGbdEXVZQHcYYxeVqjZm7UYgVf7",
  "key14": "4HyKzD5o5SyXJc5ZtVNtDfgRn5dvph3ySZa4nmRxw2zsJSLWm4gTgsCF6nVLXt1zpWN3PrGFnrD3MW2VU5GYLwiF",
  "key15": "4Sscg7utNYS1MWfmaVgXa3UhSdwcmy7RPanNUg4rqkG1YMteHbj7rYxYvVc8Xh6b1yMR5fd9YStVeegZtj2Mcfbb",
  "key16": "3XBRoDpTFyEZWNRJmUNCFwEKxpRGjKtrTuDpxYyWLPUcF4hBmPkaLhaDpQzrRBMibEhXgDLUHjDFtqoYoMUXSv1i",
  "key17": "TFCdxhKLYTz9ngCXygzaXKoo6FM6zPvRk72oonZEvVxmsVsGm7PN2P5DYQH1BJzMEkd3qwT8ruEmJyysskH3jXz",
  "key18": "3CtfcUuvk6oNZTh8NJsswmFPD9sLNQqT6hws12YkC9BRRiPfVsMssSFqTCMS3hENRQeEZww5V3r6b17eraTRM3wB",
  "key19": "5gxdNjn1sT4r6zzU641kAjhW4Fg6JnU42D8uVmQEVdpXd3qprPHAJWiGm1wbPp8Yhv7ELGrMfpE5KLb3JXFoF34",
  "key20": "2Dq8Anc8o6Qq6LE1XwcH9rUsKek1hS3CphLgGMpGEHyLTK1CSB1Gg4QCMSQZNoBw2j2b9haH7uXPQVXU8B5rt6my",
  "key21": "4igcSxmeAXXz2Y5ia2dM2iHL9yy6xhnfVENwr9aGXjhqk5TofHXrTcYvpEJ4U7mBW3Ky3d3aUQVE3162XqqydhWp",
  "key22": "ngHYKMJTU584H2PQsfkKLh1cLihxQJA4XQvBUrZ6KcEkYQh75NQmdc9t1BADa1oX3NS6fhgifgKs7QJF9Erq8m5",
  "key23": "Z6ShwqxM5E4j8GmwS71wEs5iTqUK4JutszynbvpERKMnKdWzXCWutnayEKNdfCdigJGBtFkwXnMk4c7aK1rWwJK",
  "key24": "5cYofKAUH82hx1cDxbU8NK68WJWRvN6TLte8QDZ8eU5LEewW29ZDaaBq9fek8BZStRzLuQg8RDNFac6ycmhrhD1U",
  "key25": "5S6AKifErF8zRxtokZMa6gS7DW4aS1Y1yd36v1VTDZSdNB6wp67v2ZkqF4kkxrjXFVW29rdHpDSxhvQYJh5W4k98",
  "key26": "tGYXMsjxK7GMvmrQc8CnEUspNL3jk4euNJ4HCuF4XWMi5obvChcF28hXfL5LVKo22hbyQ5bxuyHJf6xQnCr7G3Q",
  "key27": "4QEQD2xuHa4JxPDQKLbF4GsyK4NuR99rTLGEdKXDgFCuxZre1PeaZ2SsuxffzeoPKkq9CCRW2A2MdPwGSsA9VUHk",
  "key28": "5j1tfQxFJ3pyFNsGVc1s5H83h8rwn99D5nod7gEwAcQPVvnAxq3F3WNQHHrQ87xJ6mpSLt2BLLJkPcTwd1xcTDFQ",
  "key29": "ftfctkzAsYM3qDSCxsR22EouQStq5gp8mVVvfAtGd538xP25vYrtkg1rcam37V56J1Cibo2PENntWSPbpJ2AajW"
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
