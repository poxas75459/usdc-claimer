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
    "4xCoGFjxMtiwVfYzGd3PzZxiqQMMc9whXFsb78CNkcjy7xqXErXqc2qVm2CW5H8wdg7i1GPo9wvTp4Yqiw9WDXZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GydPHmCNZw7WqNtJ52a3YBH5tK8xbkqcSFWQtAX4n9GJ565vc8X3oT2JyYR6sxXKZ6nduZjCx39m5hHaKbZMzA1",
  "key1": "fGCTvoYx26ZktV68HpSehYmPqqavGfPVtKpuZs46mRE1yadfpsufP8YYZG75ZX3UFRemDkf5PHUMAGjWWYcv1LV",
  "key2": "52VVE35bijPZAeAHBepDm7Tqhn94UPM1ApGJzzJZDwEEb2DHXMNKrjNEyEHjZiai3NmK3WZfEfDqZyGJEY6sALDP",
  "key3": "5KgtzJ9Q3rZNnQfPdcyCfL7Gc7X4KoqRf2o2g1NY93NK9aYiyTrcZoCiZXus6G2bpbuu55EGh2s24krPu4PRWgq7",
  "key4": "2G1YNxUu4BcYy2NLR4KWKpqxXV4v2qvx4CFgvUpV9298sTE3YrqPjM81wBiqtZRhzkfHhq2Jzix9khmMraLzZHyE",
  "key5": "65EeYZ1WEe8ZUUw8XnZKg2ctL58REWZAUWy8viZ9SRCk9c2fBxFpt4oBq3LiSDwj7c8RGkpyqa1WMuF8mdyC9fr3",
  "key6": "4QAaSD9heeAKPoPwT5rmgBcoUGQt1TbgkRkTX4yWitUBRQMPjqkLx4nWWNzncG5YzDbNYVmE3VxuhaYL1MqgTbt",
  "key7": "3uAYvsh3spKcxpi95huo67UN2XyeRq4rLVsvGNrRyzinmW8MqX3T5Lw91MATtHLQEM74o1PiLGSPK9Xu5XWYxCLv",
  "key8": "5TYsXUEqjRkVFTPEAsMiZnpDhaFTRd8t4nVJHpHkUgLAXQShxzFFyJ34aLq5aW9URcVVeX8tNbzyppS9ZrL4gnNi",
  "key9": "26tEbzSSGDLrdiANe8Hqc2LCLi4E88KiGz7KBVmfi7i8s8DGKUdQXvorpdG6WqB96EjNPCRkSx5XByJ3KvZcHRhT",
  "key10": "5U9Z5426zszvHzzhT6p6LT6VYTpPVFoCFNSzBXoTz6914A44tRm45BCsmCcsZPeNTBrq3YeFyn6K8WFA7Nra4QXU",
  "key11": "23szpP277U979pVjSXefdfyjTiVd7cJxLvNX8fjbBc56bfkSaahYn4dduvVppjqB41nDbQDmKgD9eVShpDnioLv1",
  "key12": "4DWAN8N52StDsvhtwWvdNejqvZmH6kre3R3foDQuxzdivgyJdHvnSLZhPhrrEiqx2DgTFs5v4u13SkbKKuKu29mP",
  "key13": "fABUPdBQ4CM3dnA5mrZSUoaPq5AouGZGE6FepKdnfd4cwmbGoBaUkyiUG2ComajWXuiJP1P57teqBRoRNBHDeiE",
  "key14": "XqboZx5tcU18rfUNHpMEF3y5WQPyAhvYgfNUB36eZL2Xf4T5U2i2CKb6Eoh9sr2MrUESQ3CvfYxU8D6Fa2WXcVm",
  "key15": "4htxiV3caBzpgX83cEYtMiHiS7ja6QLYbwYdAPjMXSDh7CTNeigEXWijZGVhYRfGyRfAk3C6khicXYrdd8B3JN2K",
  "key16": "3aiKprm5dP1cxjnCT4YdRmkAELCW2unCTpTk85qVwf3ijdZZRp5Xb7BAduC29E2pnykiHfmmzEhQznYRzdQr9GtZ",
  "key17": "2uuRMJY86WoAyNWfmyCqvVSf8Z5qYhjLMke2Wk5mwRwYYR5ydJEhuuTRH43rHJTjTnnvUimaWJEaDAJgcA33mjCB",
  "key18": "4KkjBXXkDnFzWYamQTWzaPVm6sfwarpxhXQBGVNUApN2jQCJ78diMziFkLAF5HPDDmJJDRrt47ZAYXB8wQG32khF",
  "key19": "dEJkAsvE3Q2n2cc5ue1ysB6j7hcUHvxDEXFMv6r7RJ7vZHozD3pYFVkNXUYXQKXi7NWko2Li7R6xqdK5VQwFwTj",
  "key20": "HwJoKbdyfEciKWmJDkQFDqRD1SAozJPjRJzPKNrzciT459cqjfJSurD3KQPW43pvT75M7mYeZyNdNndR7aKsuBK",
  "key21": "3Hr3X1bMLdmoXB5m1QXpcnP2yTE4Ef6v4jbxZSDeMeqsNRQY2ZxSP5Jn16KagC7Xtqz1zaPg5Dzcp9FUJJ2Fefmn",
  "key22": "44XsjXvqiRLNcDxrqtaTJaxoBJUCMoKc5Xwxtgf3WWvoCsgqu71RWsmDuKSK8Uak2geWxsGwzC63z14jLRu9MiMd",
  "key23": "2kN8uT9o8Fwo9ewUAwvVaQAvLCoVWTs7qfSnD1v9HXedzpVao14m3r81T9Uv2DNoUWADfzX8AUMV7VoxhKVhGMy7",
  "key24": "1UzhFvboxaRXWT8NyNufZASZj974ny5S8Eg1hutDcXyCwEvSmHJsPc4bfYCrNf83rKadqaDfTkw3grmgLxemiXd",
  "key25": "5KLg3Vxb3vFGR8sCbUQhqRihdxB1dDstEx7FNKEF2es7TvkSHXs6D3cahdZfFJp2xRqNWKW8vnHD73TnEyCueSMz",
  "key26": "4sGLfqttPXhSdZf2qDz34Zz2poWYyZASPDdW6qvjHPRbaG6c6y9ebTbevFFScsmBypdemNDxrwgAeqs5hNodeFNM",
  "key27": "2dgTk28G1T9URH4kU5aD7J1Whf8LegLNAyfE5fh7wBZDYmnWMz8WqnZVwUGJyBG89GWbPLcWBeThKVCcyAVXhTrt",
  "key28": "vLFQL7wyCk2dhCaPyP6mEnQy8qHxCJ3QH1D118yNjqj54oPWLLwWWJdRHmXQz4FWawFLdmrDFhuqnjoAvNDyhmw"
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
