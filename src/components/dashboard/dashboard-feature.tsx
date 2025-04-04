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
    "4bKCUohUHGGkFMqeDdtBRumGYeVWCom2UPYg7Zrd9gwCmhT8wTMi746izw7LSkRDdV3uB7gUj2jgUFQyfdR8in9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBE6EHNVToaJDvaVPqKhxykhG7dFqeVE7i98QKyjDS8vm9pg7J4kTtYxvj1RcDKZbVaZwAe8sYcAugde4mtguni",
  "key1": "2wPPDf3QC82s8FJoehvUqk4pGowD5J6zxq1cWf83v2gV2hpoHAU4X6eoWKohQgqHq81oJieqTad3HSgkLf58qXZ1",
  "key2": "4QWyz6QBSDgx8PX8TCbNxkuSgigdwpMqu6fYgDhTzkSA9JJQY1rTtziF3zhaswSFrWjfV9cxbmkrtkvEfN8wgByf",
  "key3": "34qC6dsHKX3AoayATzwF5T75qAwQX2TAkTPgkEDfgjC4foKVvs2MWFmAEJpQZsV2jtC3U2XAyhee2Ef1UtnCuDHa",
  "key4": "5qg1TUuLEyCVn5eW7RfYmr8V7oL2ibZwpGr4N6qwcbm3WJobeCbHUtXW1ebvApcEZeP73Sk8cgcmGjRuw3WYxeT9",
  "key5": "2Ges3bbqqZVdqRWeaJLKJkdJKVTsAEWGyCNUDmWkfa3uc5RN7Cq45rzBv8XERQv1ePvNsNq8TCBEj7mYxLkguU3Z",
  "key6": "2YwYcLHY36YNPL7bvC3yD3khMbKHZz8MMQwvhuaSnxUq6Dn7UtNHkrzS8MoGgDLpjjHQnuBASYPSVUM1LoeJe7pG",
  "key7": "jQHZWbuzapEWDvvJu2zjEvt9ai7WATB9eqsx7yDv3WWqQsrV44KbD8otMAGXvA3j5HjAJNyrhxJ8om9axEZUSBd",
  "key8": "3LfwCo4VeyNsSCk6ZdHNNbvxrkppWj4wEHRs8JNqXtyXvQhdpFA1bYcq6sBQWA6EdPMh24VaLhrgRtcynNFkEUi9",
  "key9": "3MiSQ5Sz7Anr4MHT4f6XUV27X74FXEHjmjgLpnVajYWbScHvXd7k5jsai3W7LNjWnbt3JHHK3tkcGznWLRi6xVrA",
  "key10": "661wxVV2wQukXoV5877rE88Y4bwyuQEwVf2vAURJiEjpnfyugP2gdjfw5LMfJRmzHF9eFN4oRgVJRS7tSiACeXqZ",
  "key11": "3K9HDRh7Jz7sPeKmAmzX9w1zsQqJqPx21UqWEfSssbq5fu2hwfhjJ2mjgR23efLxdjyomNQRfwDsRZEzccvSH7WP",
  "key12": "L5JDvrSfqQW7eeiJfjZrTmvpxnagZ2YePCmM1te3jF88PRDZcUJRFSfF9E7wyyhZx5PKBTK2wgQm6cnSNq8uh5x",
  "key13": "4yAEKfFKoMUsvun8tqyKMtrcXb26VZPM4vTCQFGHA6GbnyihVnxCu7huUJ2VqWoSv1fzk3kcvAXwk8PY5Ymccekz",
  "key14": "325fgT1dAQUJa4BsZbT5GLzMTij3LX5bTmKmQHGSYY4CcRxVT8Qrw2mPGS6s7jm9TNNZnzDQKoxNhcPtNrtNaaxQ",
  "key15": "fQwhgVs1SQskhEBfeK6nBHY39J59RFYDzxagAtbvrqLhF12EUtRpLnwLuzJArzdp3y7gFQb1pautGwuwynYRPR9",
  "key16": "5GNddXbvc7adSoCjfdfAXcgeqTpe6U7THy5uFQokBvQyeXuwGGXDYgcEovqR82pEWRiSbrVsWyaUGFabmUa5yyZm",
  "key17": "5DUeed5D5cq2LnBS2yqmdHsauj4F5i9rubdTAMXQRY3mMWugeJ43KVnWFXVMBaTVyCfXG6LqTHkdxnKNLWbgJoJQ",
  "key18": "3N9bgU2WABrMG5waDZrQ2Jg2DvmfwyJrCowNX7GCSoDgwp6RwSUr39TdA7gweTmNKpHdPNbXXqAwHFT4GB872U3x",
  "key19": "5eHM31tN54hSKkM2kUJKVs9kHfrAEp6pJcbCBNmH6qdURwGUC8rxgmkPuaTi9SNy4XCJj3rR2VjGjMAVarmYEzBR",
  "key20": "61Q7kEPjUhVb8fVtNPHrQAsYuTUVaN1efkeyx5FnWjYBMs9Xpag9JWYbSoizSFcinnUz2XUfLHBTLP4wPtiYAKHp",
  "key21": "22qa8QCRt3Wa4Uy3z2VxNQZMfmnN6ydoaUfrvPRcY3dNHxmeMeEgsHQCd6svN6otv2Wy8dQ8pCEffz2QH3oF4cNM",
  "key22": "22KCMKEa5PoLQTz3hPGWjSg9Z6K6Hwa3aAUCvagzmHPC7PPmK45fkkqhaRCpfQG48f3aTi3ss8hVYRC4THNC1Fpw",
  "key23": "yMXZRDCpxxJZEY96JXWXteNXN3q8WwJxvfvwTitkJB53oy8xM4tASke9KRAMem1gsPzyL4mBxwELYF5m3BcAYEn",
  "key24": "5iWGsgrCz2Dxwu6fNxruCDcznyrP4moB27hsQfBmQd5ukZnC8xCQYzga8tnRaVCXDJ9qGNvMxTwsfRBGr1MKkiHj",
  "key25": "s3KHPedUpCCAf892jWfyvSpdJMoj8GHjhdS74iBCQZHDZUkwn1jg5guZWPqydv8q16FMVzqyafTxGfbcKpyooBG"
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
