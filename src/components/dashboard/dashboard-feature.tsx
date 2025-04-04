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
    "34tAYRWsxximbxQuVAUgDD8Yo2jc8xkKGH3qk6U8JcgaXip58A8hNqWjf2Ms3x9KXCebyHQQTJRgMbD7WAFxpisn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xzC3bjoywLeYd7vQXkKKAnTS8Ezdcpn8eWq9H1aqfD2QhCdWwbWknCpRm7vKBGe5NvESFMKcaZRaTjsSTT3r5dF",
  "key1": "4pnN3iMe8uzFQCvcwxv6LxxEqqRTDZ6epXHweJAPrzJhkbMg8TCQgAP5gWewF4121Tu4kYpismLsc28gTYgdchNS",
  "key2": "2z8Wah1XvRf7DmuhfVHQaATXPPDPDXJknxuhNtD41tcCyM9jFP551huDCKPL3xJwdkw93RsWSPMZFXJHTKPDYbdC",
  "key3": "2cGRhHaWdMXu5ZUccwcsm8KjDhGdTej8BsYCKgjWXqGMPAAcQRNmU6otKp5xjYDy4YzHK2t18kyYNGRWZZZeAUtR",
  "key4": "25TFRgH8sxKu4q9ZJicrJhJ6Z9ModpxgPAdzqhxhUkU7sdqzidKs9rVYYB1d1rEgKJ3UPVpNTf61fLSjK3mb2Bkq",
  "key5": "5PZJK8qyxoERByMJByrSsXfWtkwuoh9AGnc2ZLnMZ4FtGAZARxsBmCFB1CeQFBdEhz3UoEw8Jhqdk6evFeKXXwXU",
  "key6": "Tav9g5MqSoaa1daFiJ2H5Q4ZAAYii7g7WcJMZQN5BKiMpndoFbQzvRoPAdVecbySRMpL8Td81PbJToX92Hv8RWN",
  "key7": "5MoBPAmhSYzAMkEj9Xjwf5aPiXAjxyuDffiHdUAeLVxmRwRtrzNXwXmZkSCBgAjBGjXBuvRrqjM8FdoDtNaVsVLj",
  "key8": "77hqathPAb2EgVdgRuqNwP2cLNb7zyWmrjTn5C6jRUqMsdCYx8Pz9NpJi7vvBvZ6GGYDsMZeLhvUoYUZiyPNyit",
  "key9": "2neGQ2HtTrhSADXNiwKxAn6pccUpL2wQSFCGXuqh7q4YpVGRLXMBitWSrCRHBFfk8qLcFbS927wdsHCb8tUSLrna",
  "key10": "53N9gXaFss2g8giA7egaDCemofu8qLtnTCWv4Sx25U8UvX6aP7vShpTZ5YhRpabHhFPkv7MAJgRXUz4oeoZVs35K",
  "key11": "2wfW9a7D7KrAnhA1BYPEQ8dJDjtCc7w7S38FDSjKoyGHgSbZueF7LnkQ35qRcD37CcbjUe8ajCYBhKfFeDy1icbm",
  "key12": "5aMbycg2HnANyNzsGjYVmDT9UivAHJerkr2foYx3YWhiUvFydzkU4HoAD8jBpQqj5SVTN1wGsiiovszqRxjEh7VJ",
  "key13": "hTFZiByt2uLoQxBHdqChg1zzVs7RurwVWyBMivNsH98BHbdVP9ynjbLj9XsUXFo5tmLZwK1o87tLbmFHAFZsBJp",
  "key14": "5qznK3q5YUw4hcGn6wVS19afYY5Je4gLXE5UkdTbffLm5tC9MzfCeasNTd41PMQWVzNJ54CYDwohH5pHwJNibHxx",
  "key15": "3jdeRefW5X1XVNfJqVzGgv1DwEcrtys8jJmdy2KYHQf8gDJYPTUWvDD7eSKLAbHugQ7hEdh85dxuPV9nN3M4FERM",
  "key16": "2S99J1oHnX7P7i8xEEQUFTAoF8R81bJFzABGSHwfgRwCJQeTMYBtSoZCnypEugSkhpzPyT4wECA8geaq65zED5WT",
  "key17": "36XSeH6bDrjJQCWaz92htGCxZMhn2Z2mpew6ixJ3quXKhbtYoTyEu2dtDmti22bGPEUXgqHuPs8eLgzxwhtQQDi1",
  "key18": "3497ZCS6mWqwH5wQgjUQCsQozz9RbLkrZvLiFy3hvoPxneKxQe4kRrqP3ixscm1GaztxqzjkJ4ado6PHmqu87ebA",
  "key19": "3BKZN4p2pYy7Te8j55Dmr8A96LoPyVYNDiNMPMcqDqF5Zs5BGhmh9YHUWR6qUbdaQP5Rz22yrMjBvxEZ7yaWzWok",
  "key20": "4MArqNyBUcP62bJNHq9R3U978puDbJ6onmuN368gQpse9sZhf69y28SCjmEpju2c7ajMjVjFGMfVR66o5hQMMQLw",
  "key21": "2Qu6qgcnHbyYWHao161FSH8o77VWA1p6sQC4vbmXS5P2xTQTWTJrzWX4uBHRhQZ1HSLzqry5TSfg68iUgzi33w5H",
  "key22": "2BmVcVQGHehK43eMq4tzq4NTzvyzn5UVNCurt6CdJWcM18tga8w4XPktCLfmgMk4xR76tWeXFDhLvxbdG6DZnYTf",
  "key23": "3sExHAgN1iPFQw611RjXJePWjnnyjABSwn8bJWemX6RzGDQwyy6VN2tMJxkdxtiJ3HSW44dXZtF3TZciHeCKbUAj",
  "key24": "5HCFJ8pmWQxtABBEqzB7Xa5Nryhb6GyEsZ5zZxfABv74RcnCoj5r97jr9R8dBZkv1HLV2EJnYugAYHDB8HzXvTCT",
  "key25": "aucGYSbD3Dap5nJWhMkRUz8ujKoVpykhtr66abthSsyJ7PRS7cWcsQUCFTWenqdXafXecS1JRbTxqNNARra4esW",
  "key26": "2ZSJRzyoQBRjCsq5RnRnRgWpPaZ28ttMfT4BP4VJQCpuvySKs3dwfYQkg1NdhBjTeTcF5VBQ9TzyAhy2v4KibN6g",
  "key27": "JfenFzsXZ6FzoX62NFttE93yT7aVHerSNfas3YAxYDFhM2zuHtQa1ft5ZJLVkqgsuWQDFL4V1yNBJn2ZNCUJduo",
  "key28": "ZQyoWU8RaLxoVUZ7EXumimTxNkcwoCycjugGPHu9LTF8MHddgSnZ9ZukzZYsDaNc3xGVb8tP33d9iAUXSfkxeEs",
  "key29": "4AUm6gTSr4jTVV3SEH53KQ8DjUQSvYRfcjMow5h1QDddXs35PKfJhKRyiqbtAoDJ9nQMQgTDDfccLa38MMNVtKaL",
  "key30": "5a7brY1ZrXGrtsUttND4CDSFrE2EEeD9wdSz1AowDQB5JSr9SeTWzDjyD5TuAFk278eFzsCwBJG4CPaiWZpXho6V"
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
