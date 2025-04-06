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
    "5TCAMV3Vd2XrXHtRsTdwRVkTrS9j9PZJKUmggQhL72eKEgsizAVJgHbLXtMyb8RXWT9symxbpV5CSXdsyaWehLm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xMCcocRgCe3GuM1tDpwAmENMWrNy3A4jeq5anZyGf4v7urK1ea2cvkWNx4cYdYsQY1UGmeFwnWjvhM4YNFH6fQa",
  "key1": "4wSYMeuYqP1RgrgEQEfANweHgwZshsLvr3WQRma9PZhtY21s9naLmGdjeCuKJsTURYkj43xJC9H9LtemUxkYHtBa",
  "key2": "5G4JY1iZbqRYKsbhFYNkCE23Asy8r5hJzoQ9B2jpcV73owY3pTNgQ9X1QR4bZiAqpfdjEKHN32yXgJKqk3mTh3vi",
  "key3": "pWRBMtnFvCLWQX2bNvnKu3G1fFENr7L2Q1qrGSBHBhbAKfuppW1nEQ3skrdCYeA2GUGpFc7GCRNaSuE978S9MdZ",
  "key4": "5BJSpAPReav44RpWToEHLw3BkuPtq9mFsPcBFagvKXsqsC3X47qrJyMUTwKXL7yYeq1HyMwCmRN4ZCUN6EJy6vWJ",
  "key5": "53euKV5t25YaG5K4PKstaixVHbV7akchLqd2wuoquj9pZiNVxbF3xkycN8DJ8MEuRM4UvTMeKZHCT7c7Sgs8VtJn",
  "key6": "328khpmHif6aVRP1V3dsXh4WLnWk3z8vPwAurwCoNSBeJKTauWgtzA2i77krZKoSd6fvq6iCoKp2n76rtR6oTDBc",
  "key7": "KMQ8y1tdv9Vfe7nM5bSbyZzhu1TSLgdp7TstNZr491ueUeN46kEkeZjr9eGvz5ygwVZBxxbb53KTQLPwt2YvnH5",
  "key8": "UYuKhRnnCagCfG9nKpMkdCLxuNtZsdcwg42NEXknHjY2drxB1wAHKZ2DEnRrYNYNVhMmRWgNroBbbAUJtcU3oKH",
  "key9": "riGGEaUBEd8NkoZPpPTgsvsNUDQEiN3QAVSCfkmSHZEuXCH84iX94UPvBcA9vyEvap4UkcBXsCaafPVPAQCoc8s",
  "key10": "3QZkgKfmKqpbYexpvQmrDE7Brnq5KpLmYCxJCrfXQdMR33UsohcjxZTromdg33U3hWndC9R92c4EKKPLjns3mnUz",
  "key11": "cMVSGcWjQLUQDRQj2LCYBari3dNCrBLG7qz53qSUBGCuU45fF4277ksrcdZv5ATMLdby9Ww72eCYfEVKHoc3zF3",
  "key12": "27cki1EkeKGvnEoVhtRXe4cZKJrayfwajQGCxe8hpEATXik1Rir9ovBjBVNGdLanUzBmMyoPcdL7eVpF2NUwvrkL",
  "key13": "PwS229Bdi3qqSWy3VqLowMrCa5FSbckiG5D3sPKL45fwj9gAQevh4BrfGU1LyixQ8JEptS3pj4VZReG3nFCKgwY",
  "key14": "2AwtbcwWzGTBSS7WnwkQMn2PoCAcJWAaJ5wfoNq72kroH122GYrPxBjaCpxJNjdgr7mi654q1iGxtAG6J2P2VJyK",
  "key15": "5erzjgpnuRwmbcB9CNgmvJcYpWZyNxL9KJLEfFWEUh7fLxN5LgRQjr4CYT2x7ey2hf7PaAcYphnnc8d1jmLgcZn6",
  "key16": "5GspDJoZqKkk769Hz1YSK62TGCGq8w9FoUe7boLMjGzkZ7AQcr2YKBrmdTBHKT87JZxDKZKx7pfmtBhgEWohbEwa",
  "key17": "2BmK1PfaQqQ1FypS99Aq2BehicojRejCtwGxPjcE3r4T3RuZDycFmh4jbtDMjWAiy9RqGxcqGyptWgs8jXfHk2kk",
  "key18": "5BgYeJPS8YpSo3t6RRy2AWFmvuR4qSqD3wbvMFausBViPztq2RejeNWas3ggiwDFCbFnHzPtgtC8SGYNxo5QVPQB",
  "key19": "45vaAYE7M1gRztR72KAY3KtsBoW3LcLE9jwM7WJPqMCFukYHMANrGasvYRdnVhtorbyviXmRMt26QXjQizjoubBR",
  "key20": "Wb1nTQGRA116qZPqMdogBjLpbSGnuxJCTbjZHNZowr9Lan5FRkkV4xMNZ6Eann1o4kjAqmEarcdK4B2B27x2a3t",
  "key21": "1opM8jxLAZQDp4NmEW2ZGoka1QAa3MrXKdmso4JFZvmZVY61v8raFbbRJLAwM8eN9Q9MYBQNxx7ZS6YzE6E8CV5",
  "key22": "4oR6X8yWrCXYXVxAFBjNxXtjMP64fZ9hzSoStAshc6gattKN4TJZDVLQ9zweBydW79tRM3K2Zc6hsW8NxEnPBe2q",
  "key23": "arnpb8ioZX4xiGw6RfB5qizcgn7psBkjmfL5Vp5Uo7ExjHxutvaPK7f4sD3utz6wJoo5GbCEvVo3aNvDRsznMY7",
  "key24": "4kqTHSoM4JPNdty2vkhNKm4pSuLiR2XNL7dZueV5kNTF9GfygvupGBc4Whik4kVKs2Aj6f3J2QbJCjzQvCLYTupU",
  "key25": "269zLuUikpKU9VZSvT625goKPGo6mcpacgyvT9BY3geAKrpfxJEjeKRp79q9NXbrC8w2ijBLq3KazN4ktC23wPU6",
  "key26": "41CzZshQAHBkk9UxCc9sc7i2gjvMhqEhvjw9xJEvTjzzm14zwB2kH5RjYGBgAV96J1nVm8W4mefqnFae8Zi1scfi"
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
