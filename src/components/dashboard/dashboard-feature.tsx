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
    "67hCTznWYq36K7LDV5oDpScU2ey1yesJgRSAohCmTMhWdP4NLebsUZbXzFB4QwUambdRr78xWBEeDvbpJB7tFac6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fD1yoQTQZppQAHG8TzFaLJAvj3wgxeQhNCUMcnU8dJYRY92QKvfbZJcp4LqK2AqDB1nSjbbDQSPAaxdwEtzNDai",
  "key1": "65rhTt49ry8Uc6hBrhx6yopZkR3mjQ3JRud5jTc6qXbKwJ7HmJHN7wk8z3oNeRhBpvtvPu6Y554n6pSoi8iHycaJ",
  "key2": "p2gVjxnUscgqt3GsD8aZqXP9bBciZznsqv5GEfmWVknTcffiuH7tHVp9DFGQnhQGdi4taNPXNf4YgZ8qWkkGGCm",
  "key3": "2wVYyJgsaWNPyXtcuZQZqD96fPHVNiGG188dHrdtK9fohmMXbLtosPzMW2CDYZjFTNRkTVFdvmDBaYXPvgMPSUQ6",
  "key4": "5Pyw6oHDpTM84A7Zo38kKw3eEHKhxecgBRWw57gVZpocQ7CEaUigFN3sGUY2C7rukTPYdAgykEMsukSGsJewcdjp",
  "key5": "4XcJvLNpmkFgYKPjo47wJeMy6sXyLRCZjfm625oALog7avudmwqCuqZzkEBPBpJbewpf5VHhh1hnBWdXMkJnuTFX",
  "key6": "jPof7YY1VaaLCoKGgyzGqLYHDScqpuK8djmvVaoUeFFZghYYtSHtR7iznzym9FsRqkGuQHn9Fg8674WsAEvzJkX",
  "key7": "mrW6MgpDAVJeL4J3xW4sGzRWfPwVRb3XKmptfHkMGfQyjX8Wxaj1w1ueqyaBjxrefoKZVtRtH4zokGN4EiTczJD",
  "key8": "5pangsWHunXugyc3erz2dX9jSUyf3pBQSV4acmYeVBdAt6b5Epyb5Lrkjv3o9HTKXyh4SrRHPUw4RNzYquViG4Jd",
  "key9": "3ehzM4yyMBaM6qTfk4jYcgjSmqSjFakLQctp6MWUWAmdrqn5AviP14EK4FTmdLeuRXUdQwCogg6fb4vjizgk8Xc",
  "key10": "4zMPy4yQTTMtfeqYoykW8ppwiJzGZ1cR5Pd9Fx13Nx3nfx2xHFqqmR4j4RwuFxq61y4BVtuCGUxq74km9TYpfupH",
  "key11": "4cfHcr5YNrQMNXqzsmGw6dbAzMjzw3tWyYYwt3imvxhtUqAgy6uLSJTDS1GEbutiEhA1hMJTpSdbEkCtFnNJjikZ",
  "key12": "3FL4x1dfVk1Vwv6eFihuoUViVudi5vdSRwhzw6Yx8JYEseMQn13KfwKE6trqeKzxNxnNAnsMsGZxAtAxUKPDfs3W",
  "key13": "5CWeW4KV13vN88GWUxUGKFcQtPVbcRA9ENk6HmMM5AkyxYWEJoUDKyZJ5hX7Djc7grHSBhEfVmH6j4Ms45JuZVJw",
  "key14": "3JhZnetGJYT8d4E6UzWAsGd9sGTtw9xpkKFgitA4xJZGMf9RiToKvZNzMEC3ynmk6BWJtaCyjZT8mgLi8UQ8VGai",
  "key15": "4p2L5heGfMsx2qQB6AEjpGqEwgZ5EHEQnsmTZaCKzbh3Sm8SvRLMGvqUDrK2MAMx5x3ES3gz9jdGHWmYJPKaJvFK",
  "key16": "2yfcEqB5qnJo26Bce2MG4wVdfFsw5KJcHPLJ6QkNe5KTyNW1Z4LjRBGMdsY8CmiHEc59LpHdsT5V5MC4icjX6sm",
  "key17": "1afgaHWSAQBuTnc5ikzoc3kKAHJmfomJy493hW6F2bcxtbfnrg58pQPmDhjWCTF2GRDNX6C4iwpq7JrqySJVihT",
  "key18": "3HZXAMphYRcsH9n2Vsbzxk6KVMyt57dLFBa5r1wTs2Q6LyRcEhuuDfWnjFoFQibLbsP8mLJHDb5tgZUA9GVKxLUz",
  "key19": "HveaMbf6NZMLQYudcgQkv3ijDWfs6FvgbNHRcu4zc3JD74hC9YTxqukjEykV2kZSRmYi37KsmmLZb2TDfR524TS",
  "key20": "vJgrQbi6YLu7FAa54MtWc1YWkYW3XNk1tKH5h5Huwfgt7LH9TECVxR79tAvs456PoramnwanUgBCJHAduV2B9vp",
  "key21": "uwLMiFZBaDb2WVPL6iYTuTRyXWcQXsc8YJWCxXLcgWhhjhiwWVNaXx6wT8U7uWV8dmiB65pyvuCnPKtki48wKWE",
  "key22": "47PNuBXduMAfHzkUdCRgzof3DwqtkGiUptV9mdUYmwqhUzjrJxaQJajj4mHrqyTuKGfLHos6ayWLRcYHu67vGVR6",
  "key23": "65ZXdr1E4MwrShkPqwYRvQNfKP6tFYov1JiqYbpJL8HeRZEi4EkE4FFiW6E4nwXUZz7pWUNF8nDya6eY4C54p59D",
  "key24": "4vjLWFysMLiPCGW17tRJEHyJFt7T7N4xJdhUiJpUqZDVz3hn1LRhFh8cE8Uej3CiSsoxCRGD2unioHovWeoZcra8"
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
