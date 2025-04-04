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
    "44K6PyqQfeuGU3LvszF1uVteuczvcGPftRdJAwzzEyegySYbuzLifaabDLDuumBFQj8m6Fpr42SeBVK6WGqZjdZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v4gQmRrLJdcAYPM24FkN6usfBYfqTyjMaq13R9GAsbC5Cc58KEjiWerxW8uQeGz4tXZdKqpVG8srzP7dDzWEmqr",
  "key1": "58JXuYQHrscXVWRwxkvreNJAeU8Dvo6LD6pGjhukpkA5Bg49AnQ32GxT7n99xXD9ctxySZfL31W2Lzgd1R3yq55E",
  "key2": "2f7JF4AU2JxnCYKppktXZTbuLwRP3KfwPztXyevKUw3gHA18pBP5j62oAJZbWyrWWpsL4sMBZpKVd1HVcEeCztki",
  "key3": "5gYV2qzgLuPDqHXzwxYw1LVsknRdjmCowrMyhjGXC1Cjcah7PFfq1SvDT75AwmGUXFFmxseD2ifdv6PhkskFNKCf",
  "key4": "2hktYvcFt4adFYWkTYiNZ2exnyViy9D4Vpdvuvss22cLC6DZk8uhgoAp5QK9Ld7LtioaZPMyfa6KhKSBcyrPAP3Y",
  "key5": "4YitEJA7mHpG68rkHxNcXFRg65xE8ychYaxb8YjYvAkzokcZNYAugBj8PVJ1M4WwxWLkCQ8ngMjVXRLiPpMmTgV4",
  "key6": "4GwXQPncWF6rRfntVz5EP3ncf7tU6v1s6cDgQ2FYJRnqZkMWWDqdpTpEqJipUt9RkfLjBPRRiMXvYTkgRv3vvdNo",
  "key7": "2QL85CvAqBH9ym7SiBATd8dxq9jahSr8JEZ38bLnVdZm1GvJQLEwkDCJtXCnraYRpHfqPL16yj67U87UqpHdJydj",
  "key8": "4EwhGEoSCHMPGgoLsw8BSpLwNZWxuzSuYryVfbHyUUFCu3BqixTMuXgPfAx8xWnrFokydJHbKquFNPaP7nrnnoaa",
  "key9": "5zf7vJUnRshbyqDZWni1yYPcGa18y1AjiymmkBm7QMuY7pJg46i96AErCBx3dHibLmYEyqHcw8XvSZKyAdDuz9mQ",
  "key10": "5yuLBNcVPoB8pJfAiqowzG9jzgcNxme5LdekM8zy7WMnMSFpeB6FsfsdC19X5BNWh8EhzsiwMPVDk6wqDqpMMeTf",
  "key11": "5pxED53Wz2bDUr9BrjSb1RF3QiKLNmF1xtMa3p7mKyiZsvCMioQphscFrLmwKr9K1VS5W95Tm4bvWmEmprPTFPZ2",
  "key12": "4t8t9sb3imNvnxDz7wY3RLcc4RMzxKTPdyy3UMMQaaM9Co7ANHXa2BrWeqGKebQK2avwkaMbpt8dWmCjtdmkmh37",
  "key13": "wExznD6WJHqkMJHHzxpLN7pLEX9auwz8oKex2x9gnNa9aCa68W7ENbLr8hrECRkYa71fR8URpy2D1Nv9N7FKStQ",
  "key14": "2FzMKA5twPkcs9ryDM24k4TKFYJgr1aAZjo29EYx82E7SpRRJNuk3FoceV6G5A2H1LvejgXe6eUGfgPgMW7GYeSb",
  "key15": "TgFmFJjbjpgxunuwW7g1pUCsnDbQbjGbc3vtntuVAKURSRRpBb6isoo9Qph7r8fJA2wThL3Fgi7jTX4hKcWD6iB",
  "key16": "5U5RAhcjicEbDHXFxJbXK3fN4Q9xVNza6ZBtQ2AmuUUK2LMVGfXQLLJnKFTHzJLzVTcSvk2TBwB6RUkmAw1BC16T",
  "key17": "5221RofCEwxQU9EfYtrJRmgFE7Lxt7EACMuf47L29YFA9q7n4CdJu6NW6R9918vV8d2RwBA7w1uX4jnrM4P525FX",
  "key18": "2DnF7XFT8DmaiwALJVrbzZxrZhW5bk4NHK9KRL1CAwKpMaNqPZJxaUay9wiTJ2F7xxRobFsTrfXUn5BexUU8XvkQ",
  "key19": "4p6fAv3jhmcLfjsKgEexBsMcV1LFCqBmnMqEXCTu3cmk17vcz3GoSob1JWNWLCk91zHvEDgHUFkQ9N2TgWk1bwGb",
  "key20": "5awuceQeEQhMFWPwSkyreJYXUJEkdUBX4REUv6NbcVRRieWfrnLLSrWrhLze23RDhEwtGQkfSUuAKuALGbNrAgEv",
  "key21": "2g7b6FZX3dKCvEoFikFKixy17EXmR7PX7MBXjKeUF5B5P8fMPJGuyDptJEDrwHbXe7FzAkBfa6Hx1EcY3bpuBi8C",
  "key22": "2MwcMaa7JA18QNrDsp7EShSMVbLT8u64ERHfJV8Sqd5nPN7ZLC4kuuQtLm5yYML1VzZxGT3caMrsUiENsNwHZ2mG",
  "key23": "4xKrryh4WWGXcLDJsxPT7ACa8S1fV93d1fWgVJe5pT6YCF8fM5Y2VmxJXayfy7cgBbHYtfw9So4Sbv4Lrv2WmsPt",
  "key24": "2YPZkE8z4eSjLL5KjatyXWV67goyqujny7563TGKQfsSRsk6Sauh5KngTFPGwbCw8qeqnsTpcbVi3hTazechcghj",
  "key25": "4T7iJ3ujQsN11Ect3skDrDLDuaNxbuCcxLj2ebUxsmGaDvdHdwZkj6TNNnSSGfZZDshL7hTBgPH5BbgEYgA5VF3X",
  "key26": "TzMkEvms98ui4tHBng2y3tGv52j4x1mJM8L2f3PtUDqhifZeFLqTo4AqRvLugJKfYaunBWT6U5BzAvqLyALaJDK"
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
