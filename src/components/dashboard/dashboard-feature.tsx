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
    "5ZTT6tUDsieon8YdmaLcsrsEHHc9SiCGq1ioYcuuMoZPZn7DTHiTTThWeQF21uVrF7DN2Ah8sXJmfS3YNt6coyow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpKRrzuiawujexF1PMbfLCA9E5dgvUK85wLMit4Sn8STeij3AhKKB1yrA6WK5uGhFDsSWT6vjnetWRcAew54MF5",
  "key1": "3pnAc5wAJBa8g6K8dcmunnXp6gbS2ePcdw1DJBDhwFt1gmceFPkf4JJ3mJCdMmFQrwkm2N5JNs1sq2keJcPn3H4p",
  "key2": "2cTaMZkgTyFjPhS8vVTPgCQp6pnzPeW4pBYnhuDUHjTHpiSP13rEnSQDo9ShnYGzq4822GXjzk2Cmrd4ix4MAnHG",
  "key3": "67ZwutQG1ZRJjvZBYiGcEetXvDsHMZJfPxg7SsW63PmJvS5UtFW26KC7YGx7fp6Vh5GxxnAgVK5bQC3HVU7oKSLZ",
  "key4": "25moBgiC4ELuAMcnWJeULAmjCo7ofkcefq2vVvdzwvRMTGhTUWBeUs9wUyHunCCuAYFrLDP8MUzDZVfYPvMhGKfq",
  "key5": "oBFQgueCbdwyDYcRQwjeydoCESFUTetwfb6XSZ3Etv2Fe3icntuQS1NFywEP22PaRUjFqY4ChNctUi8KFN9aKr4",
  "key6": "2LT63MBab2zG2gyL4YXKBBGxqvPnnae9J6GHFw6Mwf5voWEWuPDbd9hf7LPpW6zCK13vdH7GNk82G5VzXdz1Ka25",
  "key7": "47wL9HrhbZzJVt8ohUJYJ8ER2F9uceK9E5CajTVuWCRRyTSBQm4o4jqiVzUYiibHu9BPPJJfKDX5948VK2mToUze",
  "key8": "4pmvPH5h9XNiSc1i9MhTuhrwNTBTLCo4XJ6JvTPP64mcUcjrbTkSG8gSMBDNXyYC1pSw9Vy5ByRX8JjieUFY7fhG",
  "key9": "61mEP31EqJdYwEdeHxaBDeZwoLjB4bNwoFUzAbaurhxZbZoDXjibgoc3TLGt4GahUvqzFmP7Q4YNqe2GvViG4t8",
  "key10": "4qrYbNkmMydVCkJNKtdvNhExeeVMgsSmAWXuvJ9o3ybyzWRMVrGpZVVVgDdQ4YEJn7pKuEfBoiwrwKbhh1r6rs9Z",
  "key11": "3HH9L6SfJXwsbcE5CBD1VPEDoQjmdowWMrePZv9tZgHvnz5FRHBAW1Syoq2s7NxEny8FSDz8wCZv9GcPNQNqBGFe",
  "key12": "3fzERdK7SrxqNmR78Y5DQtbgzaYaup6cTNxVTAPeP3sGyEQaTbJvLcENHi6yhLvirqyP5RHeNYHBkQGRMEgYm281",
  "key13": "3f2J88gpMPGXj4XLBzuarhv5KUPvqfprjm1u6XDEHa76gwKR5iTMjijcLSBcrjtWx62kj7KLdgN3pEJMpXyyMbbV",
  "key14": "2eq5imKLQ3q7AQReAtQuqauVPTQEK67UV9pVBf3LwuL8zV2hWZ5LKzdueKxyyQUpkNXSBCBt4yD2VgnQ9NSjrc8v",
  "key15": "5XZAnjxe9XERH5rrbH1WKaZ5DCuD4RmDs84xB3FD5WbzqqsHuTnzLXZMzdtqsfComT3JZ4d4zjf36AqjUpnVPaZK",
  "key16": "39ZNedyx15cL1vmi4zHfPtJYxbxDvEnHFdYmDGu6mrwxG2Heg36hvtw9dNhsnDxhhLbTm1ZN6RLgzrqc2x8cqQRH",
  "key17": "5bq8qzaUoBQyiP2WhXgwbXyk2sJBU6Woiwuw5fypBTKYfGVBWTDeHbSnYn9FdMTNPr2xmw81eMRagM38YoWQc5dU",
  "key18": "4Rk4NZhV62RUPmur6MJJpEResvbJVTCDg2KdDCVWRqeHWFJjajF9hZFgy6UzrKmp2WkXiW2SJWURAH4rAjDsWAro",
  "key19": "vyXznN1nyaoaxvZ73UBbv3fTbAF4bB6GvbYfmqVFpuCsb2f8vzX25DQUepU1M615GHTRqYLcsNNX6ceQ5auePAx",
  "key20": "28ddc9mdk2qkvM99TiJJToAxR69rk2k1Uqzk1e8uyx1SzNciY2fviZA3Sm99Fq5XCDR9YgpbxK4WSFTNJGVG4JhP",
  "key21": "3oqt4er5vtrnM8XnUFCaPA1e7nGD1qTNSVVJ5ncH9fMopPjnNC51UG1uhkDhjbsp5i4feed2HtzS9YpzFMAN2Xh2",
  "key22": "57xQ7VX51y66ytxTnzgXpXsXWwnDpCobzkahUBQ2WiiccTKP6GzGvGEEaiFDDr5AzxxsAeAcp83aNpRpa5f6tTR1",
  "key23": "4QU31U2RagT9SCr8hhqgNzmHPeKNogk6BuAnvshBGyaNrW3vRfGE7fm9x4JhxMgceVQXgKBNgXmRKd2dNbM3XSbq",
  "key24": "2sbH7M4dv4G3e7dZYNSzct1rt2ADksR5WwsfRDpnJ6djautQbQf9oR3RTWg81q1iy65DrjhfyTYXshijsjD4q2CG",
  "key25": "36Sx5YSmD9rTgU6TLwKVBr9AAA1zSpsnbqD4foskQKiMhdYXMYXSFAs6dm4dae8WFdDbK9Um1pk7hnNJ4A44nfKU"
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
