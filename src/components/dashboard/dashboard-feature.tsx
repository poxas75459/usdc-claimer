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
    "31dqEFwFWyroDTHxVXVPRbCGJmg2dQRfLe6J1Jf5KT2Q4Yj3o2fLZ9VVZJeegpzGaWQNbqSmt969fpUEwMi7bVaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7f7qs5tMN1YfqTGNEBH1HT1jX9DE49dkGzH8p9D3WVYdYRW7efvQeeTYxaCePXQ31Bpuf37ns8dqcaQtCZGv9Jc",
  "key1": "4i6o7UPDbCJoZtj5R2qmAzQLrQDgfJVjcgSiEdRefFfPp7oiq7csW7acRjzSvKUfj6U2DkWyN3DgiKCP9YozNnuL",
  "key2": "4EpEb8NqrtVMPjKzhjCybgADQSsLnMJtHRSow4F4UntyrwFqj42ykAF2w26cVBxuDdvkXvkafjsyYmEL2yM7Q2uC",
  "key3": "3LQmj6R4keukb7R435xzBRX4EA94Gvwo2tHepHk6ygSbjUsqAf55UbKJz2jsduQnefvfcuJWLiVqbZVUfwv5jLb8",
  "key4": "aJyEEzBArrYYBLNhzEiBWs1Rc84CRDPAjVzWwcQ7RPaEw5sNGpHja27unjCgZXQBaM3iz8QtVb4bg2bsocG36xB",
  "key5": "5ijjbMnmBiFcfrF5j8Yk3D8SiGkSinvknTNjZpDzZhco943vkuS4rTzmZb1t9LhL193SUrg7bstAte4r11zG9ccq",
  "key6": "38SADgfLT7RQXVDVhkWAgFPzUkExbAGymyeuQ8NrqDfQm6eUCbYp5UMQvuJpZnLrNGeAaMpcE6jUaGbdVaqb7ote",
  "key7": "5kf5jY7fKu8ZGuLoYzCGEQa8jgsA85irxe8nHZCk1kpw7EafxJyu7Esgz1YGAHtjZFcBiWKceDxYBXGmUdRb1ZFV",
  "key8": "4Cm6BfL6sKwHRj6cRbiYkm1gEEAknkSFy5Y9ShxE2WvHcivrpTHCV4cSULoVMMb5QqXHAm3hSJFezkAErAF6XjEJ",
  "key9": "5tVzK3MbGdQ2GNpvKErkNYsEF27ViNHtnRAcj5QnPnzLiqsRGegGGatFcSpjz1QiEmeyDxPm431fhjLdLe1HDMbq",
  "key10": "5WTdmRqLVPJpBAb27i9JZmDtkWoHHVTiSEjY9ixrk8Jx9Am77EikBtXdx1qhCuxHQ8833r2JjDGPZWsc2BJwYdi9",
  "key11": "6xQcATfkz3frgPCWFkU69ZLTMiwYkGoXikWhHtJ973zX5bBcwnaZ3AV4PYbPVHddvA2UAcYCKAzCGtHExeCUaUX",
  "key12": "31m6g2jfKURZP298so5btBbyDPqaYbyTcppor738M6v4unAMhY7qG9ZmZE9BtcE7LSvyv8y9tEUPWJ7RUnRqs7Hh",
  "key13": "3MpxuBg9fEAwf3d2wy9KmpJS1wkSr74XJW8t6tL2FxVp2ApK9uqxntNcducw65kQVHQCDRcaBhE4wBAG8r4YojiE",
  "key14": "4APnroDg12E86HoBpqJeAFSSXUd6rXuwG9zKPY1NUJGpgywnAjrvQwNz5Ct6ANGtMYRUfTGKBBh3kGeEzUkJwkje",
  "key15": "4JR4VM3zWGwHjM1vxqi821XvibnuQuitKsdpEf7Wfw7SZGr8MUAxMHpik6nBBH5Xuyf4MZXxcWauYzHYVbesfZHF",
  "key16": "4AXsbWwfagzmwQHor2Efgd7wvwCy4hY1KKUgH3Uz5YuKTA1zWsyGff2JUPpSRZcu59E3LD3viq58eYP6WdwYmufN",
  "key17": "4Xo1BSAJXzgLZVEiRw6Qd6XZhXUZ2wCALafcU63UjvLFbtqCvZ9Wnjtmdyh9oZhZK9KVUUHCj4h1BMP3rJfKzkTc",
  "key18": "4FGQjdtwp1XeZmKvwxa2mMknL2kdYR9XffuvWGW91UamcrdMJE4RU3F88u24huUi6RebXAQKZbpsssgbQwJq9Us8",
  "key19": "3VEX4zEp9ATSdF1KVYBXQrKPJVt9fUfAw92FcvyfQxCGb6ctrBD2dFV7iPKQgxV8sDgygaaLwbUor63JYgyUuaZC",
  "key20": "MYTsgkMcpcFoYbZyb3jo1Cg1SzzpWSVTxvGYCNjyovMAgfxnk7zWBYgmWEeR6CUMur3jbjdxUHne17qX9AA6GTq",
  "key21": "3WYrCHPQJF2Ng61woimX1JVfMxPcbBRRCuYnjxtd2eaTRtwfz4jUkdNcH72TWRmUaXt2jHhTMXLhcPqXPCT4p1fK",
  "key22": "57KB64chcsgQkpjayEPWPKfwKkAuQ1gMnDbjoUVUkJpfYoyJ2B9x7cenReC3p4VGsAiLaqsZ1u525QupT3mq7YBn",
  "key23": "HL5Njt9Y2KoKAxsPps2gQzp4soaWLNKHg6tBjAJU5Lis4SJPF6KbcXg4nkoujuaCXftdwCyYuNtmGaWcZk4AZFy",
  "key24": "5xBQtiB5QD5xAKREAmoEff8rthypDKrx5tJJxjrPiCQsQNmAbEk4Cu1Ga4i3ASDNuD5mB5UdkrCQ8eRJWUTVG1Dm",
  "key25": "33gWFrxbhsQCaogAg6puGKTcpgSRWZK2WMFcmNLDp2cmLFZCsRebt3L2Y9jSMkTStzrh2QjhuKPEyPmGSEEo6WPd"
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
