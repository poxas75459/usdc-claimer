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
    "5oktbh4Tuu1A4gRbrFvySxHz4UXRGiKS9LuErLWUwoJMr2bErQCo6KRjPeFemcvFFu8oEi8HcLVUT8JuaKKAQFfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PinkivKQQwmmPVnF6HP92kNoKZTwUmBV756gU5GHVCYSYbF3SxetZp1nopfNsTS6vitQhQwZjweBopJnMSs7vmS",
  "key1": "43M9QGaeLBiQivNiqdD5wqvYPwVDjDu1J4qtiGQgQ1iF9b5sTH9zPDDSHyKhBNvDBsXAPhbnoFtfXfdMkX2xi9Mt",
  "key2": "22JyN1Dq3LjJ76TdNKx2BL3sET42x9i1q3VjSAsErNrJxXbqHEZixuAYNHp9hkVDtortz29SfxbzcVBwUZBYo5zF",
  "key3": "2sgPYkgtZDGbADjmoz9uatHA4Eo1ysJ8wSRJNWtm6hnsZ9G6SGvpgnwyZXauAJ2S4XssKdGqWmHmYRNwjpxVko6",
  "key4": "5ZYS2ijoKR6qtCVWB1Ga1nmVWm6avUoT6sv2MXWkpPtQpKZsuFZnmk3Ck815iePidozYdAsLCc7ggYANUnVjDFKP",
  "key5": "Ub19xSiHFWLRthF74sZKbryidYzTdhZgJxLgh4UXmgzcnu3iPicHJEExV3ipujRKKyvauLxKHZ1WK4HPNB98kWT",
  "key6": "gji479kJgCgr9y8iNzSTRtbcq6NdZqWd77JAQjxWEfHQdT511WwopQcShcaPeuvDsZmvAem4yRcZpF2bH6ftPWk",
  "key7": "4a365c2q6KJgQbgkkCMFE62noFDTWDBxrb3KyMpDivwix38zaDkuthRpAXCiGqJSsDzyJVypCaVxcZeXw2RRFCgw",
  "key8": "5TU8XAn6C6s5RbDpASNdxCWfn7i7tsDr69iZEbB48HFUbKw1Rb7wPCSdXKnHJNPyWLsqK33ZMFsFv87nN87vwExA",
  "key9": "2P4fQmBiRRVyfdrKsrerZzeUwoRwnP8i2WCVioDG9c94LUEvAMNQTdvMnzBrd6z1wiFi16KhQU1Zehu5BtnRQ9QR",
  "key10": "2JVso8iwK2pN217NuvAdSaHTa4wuunUn1fgMpiae5rEJ3Y5KUm4w83WNovYgRz4YW41fmr84tsJVNpdXF511eegn",
  "key11": "4Vxsozjhxa8pUiqrhUZMXCD6jJu6rFFdE7f9JXmSdGapWGwgTNMFndwVst8rNoFZ6HVjEhBr1UBYMTxZUF68SFjF",
  "key12": "B5KjKZM5EEyJsAQSrR2gebM8UUJ2pMXmqEfUt99Q9EKTGNQR6T5RF67XDS8XbGpVEeQsBUHR65EBDEFpYVKu2Rb",
  "key13": "3t2XLhSYKX8iLjhewMXdRqTcaxz5niysXuL2c3kxDh9bezELwM6efXryqzS5DdamCJLYzTt9rJwHWnN8dzY19zwD",
  "key14": "3PeThBTosFQqzMaLJaD8TrVMHzhNd3h6r81UkRrftF63Ji3pKpQes2DeupyHaBRWW8BzF4NqwEPsK11XbaaEpPWH",
  "key15": "2iFr9hP8aNJ16zHMHA82ymjjcHutDKKw4YLvwF5MNFe4Udf5shWAhZfVjixBwWUnBhhxwmeyCUjn5tp3Wb7rF2k2",
  "key16": "5hCpLmaTX6TH755A997L6r3GHW1ZUZ3whVvKUrr55Li2KuU3gpkPUar3c6rKAw458JLS91e2gnucPggrenW6vkFF",
  "key17": "3WeedL1DvV7fMyZ5Nk666mLS38V1hHyXd2Pj5ooSqgPWs4kvKECwAaJ8Fiv9RQY6qq4wRuZ3vWDuGbz4deMruLY9",
  "key18": "2ALsAsVT5YWujYAXJpM7gwrsXDZ8jYkUTyUfLnWAUvT9nanvfEagZFiBzBiYQTurC8YjjN9ba6p6DqjUtyY6Bw94",
  "key19": "4SVX38FYAhcJVVTRdcKiSFjakXuCQRrg1r6cg2DXESZRTZFrrkZrA2Cejn6tkkf5azmpcovJcqvzFVcpqWESehzw",
  "key20": "261jY6sn74vzchKDBPqYBU4E1iFWKZ3wE9BPYLLzUsaXHgwKSi2iZXaUgLBoTyDdYbTQZEfjQifqgY3QtoCffNkG",
  "key21": "3Lx8V5MTix598rzR8ESExS5KC9261vRoHdRbpM3crQf65naoZD6nmQT3gCt7H9FHKHUspdtqWDK1FZCZXRsQpgm1",
  "key22": "49BM1BrQ24YoWRdecb1YcNetcwfPNs3xetaZ3Rr6d1juUpNqRGZDUHczuxvHvSfvzFKKyCwouRXgbfnHsh8Xfm9W",
  "key23": "2L1zW6SwkeE5znZwYRi9YC7cixgeDhY6gLE4BrwchVAEBgY7JxXUCQhXJR2S58hsnNgsFyoCeUGAus1UDNEVx636",
  "key24": "37iCR6yFGHfUngxnG1rRpgg2Cp27RGa4Ufi35Y3k3aqfxFMivz3WUmfrCsMq6UmX75y1EPykcJMoG8rmUmfcLzCj",
  "key25": "4cCdbqNHn72XZDB7Q8D5sfgxZbmwhxui145vkYUW7W9ZWQ6yAecqkuJwvycibjjxPaz2zsWVqu6DdgGJneLAnUgy",
  "key26": "4dhcrUrQy96zXDNi4yfrtXJfSg19XuUxb4TiUTpa4LGB2Zc1268dG1u6cKCBEREycGNb7Ni7rMdtM8H1Wtuqu1Z4",
  "key27": "4UvqFybzZ9fncgNACLQUKwAhtpzvWMKAUSK7Tr4T7xN6UTcdRLVmnjYYPCEgHsrVenDAxFJiTsqu5EpPCXNeHfAg",
  "key28": "2NSqihjw7vvusUN1MYY1zWsS41xzmK2emR6MKrX1a5mnnT1YvdpwjsBJZtabdTmYQgXq9T1TimnngV3wzCK6fj4g",
  "key29": "2WAxUJRc3cu8BmHEVDucoB2r2dVvxupwgC5zqpmz3vt78wNEeuuswY1cyYsCo4Yt5pxCvaWQre29SD9ZRBr73fya",
  "key30": "47UKraTo8hXDBoeFFzFFhUoe78vEbXPSTRHatybCHcGpSR6Z7TXkJcfSc131wX9EswAdPEKTY79ANBLtF4Cd7ME5",
  "key31": "62mXNVTMchYePJttodgzY157CKGaGEKCB8f58d8ZzYojgxfMWJE2JQGiz35a7CuuWfZj8uqFs5dEGVcYgpxgmANP",
  "key32": "3NsDJdD2FnSv4WSjz44HbEg1Hg8eCxv7GTuuEBrkeHbL7nY8MTseroxYdT688qNuApG3g1h4eRnecXRmGpiGSuPh",
  "key33": "58h6jfbgo63wTDdXk6ie2qws2zXJXmt1ep1ixjVgbgW9n2Dg1UpH1DPMF5jvRqX7vwydkTmAYLYSV4NMfpyS5Gwd"
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
