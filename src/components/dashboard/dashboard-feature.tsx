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
    "3D4FaKVhy8Qd2MqsDgckrWUKAcfwcxCXW5pBsjnvSSHFY9AnY5VALn6fS43Co5uGxAB6RgfBcMrVLgwQRdhJvrU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9aiwoYEfrRh43r9rVVHL8Y8RHRgNxfNa4VVFtT6QjBvaVF6NoMAkQKeS7WNmchsFe9UiEvuL7s25bySoxTRgrDq",
  "key1": "5CnpNdTNt8EGrrnvXJJqjMNFJLDEyjQsERc5GhCaKmJfRgQiYebUAW9XUKRm5Rs4KDL5odxMXq1n9P7ECSDxU1D5",
  "key2": "2j9jhFruX8Ew3TN8twkm5vxfCch7s8xhJf3EcJEc9yGbCo9AXZqhB3924QLGxVtMsbaLDZ6XACthpV19SYn2ujVS",
  "key3": "5Gt7hzjBrV5dt6k2NLXgHfYuvJjezYDBfX59vZx5rhN6SyJXzsaG5CGMQrdrfUZSPzxM9v7Kkxa855L7cAGqDJhg",
  "key4": "3xKAzQ89PL6NtTqeLMbp77qRi8XVh7AtpRoz3cvNLVdFH2bcrq7wLc72BGpfJby4jJLYjqRnT3PbVVFhzr2iBpYW",
  "key5": "3vScgKoZMVYS5CdfLT1rGexfTCytvRCSiXzoALb3HaKTvuSLQJBZWeJkjPuXgxxqHkmaUSuSJUdAPkLmtVsNVtPW",
  "key6": "5nhMbXYz9FCkHStNdkhXFmwBWEsz1YmbCkphwGC38MFv3RG8S3FHfHbvbP5vY4J8yUjqrcTvMrKfwkfnrc2ZJgcb",
  "key7": "2uGdV5LpZUj9s1XQEaGCsV8AK5gqv9mqTLitPmNhNdiacUE3zkY4CsnJxsQYvSPZaL9rNeNJnkmtJoELxvoWmwYc",
  "key8": "TpWVF7s25QGBGdyTHSs5j4yUxoefq6MrxzdFzgv4F4KtBXxsjWSHNyvAFZyXEHc89ZdBtztAGvWnA6ACSG2bGRj",
  "key9": "2tachZ8nxsbUiGrYgpVAzjGWPqeA2wTzxEPez8WrGHFtNGnXFxUCt8qt9bpT6cAz1ryStMh6PCsxCNwPc2wY2d42",
  "key10": "3MxiSxYNovLJ75LqMU784hzhwqbZuo2uzBT2zvya1SEiVkdahwqqrMNHJEQpgxctxmTtMdqrp2mACmscafdAkcc6",
  "key11": "4krTkGygdFBbyiLbFt7HDzcukQi5APMpCd6SGTPjHwzFtKUCxKERtvb4AC2MZJXKqQeTE5Jmt7uU2D12UPtwmBT1",
  "key12": "4MBa6fe65pnG8hh1z9GfYpYAG1YwaXghE17GDBgvLdfbst7EPZWxTTMW6nmpGrwyWHgqkKQPqKcMGW3wvrSQyrJW",
  "key13": "3NMm7i17GQrE7nFkG9T3tyPfNsFJ4Z3pgBPBqgv5GwaAs8bARfzbEXbEqej3WsJvEVQkZmHGUBoGwMLp81XpVc9Q",
  "key14": "5VF7tRwz8HF9vFqZF7thNJQhVnQJZz4ttL3NWN1Gsk4oCZVUKDRouk2B5ayYs65aQUfsjwtSXLnn11iu81PiiTLx",
  "key15": "P77HVSo23wUwxue4FoAmQeaZfpfm7r2L8z8KZgGqaT99Ctz31zAStMubtLwLxNJst7xt1qAdka2xbSd4FKk6GN7",
  "key16": "hKADnwRJ9vmidY6EXoYS4Ni4yjiz519ReNqxTn7xEpSjBLMRp2gonRVrmjA26RGwdCPc7K5k8GNP6DzvA7CLULj",
  "key17": "5SMfeiXRH6KCTdF5A7GLx6ijqFEHnR8uXQhvKjnJB31eYdW7NniC6XbLV5bSRkkvr8oA18PgXUR4vRUewTM8g7Tw",
  "key18": "3kA5yGJM5iDp3AciSnY4mr3Dc7cx85UtroVSx6DpJ7zGwfgaxakhzf3hbpkX2twdus23VwDBDjj4QRmuiMGgh2Zg",
  "key19": "5eYt5p48W1BiG1RopM1js51fvcZuTz1mAa5RNCMyb2U7tPyvBD3XZHNxvhWzMwsuYYhPkvUKEq22hcgnTEQNgikM",
  "key20": "4CKsuAe8KAivz16FWG35LjZZyb9hnpA68H889Qiws69HXRjJFQ1oSXL5eaFVtkPuTLWxYFarfqnCRNEo2pC2pi5o",
  "key21": "rbdAS5rqQCRKeZrLVqWr4nGbEEQAFntQss79VmZNaTbmzD3F2BxqxkCz6b9xDC6KwQKt8NVdA86X9PSEsax7DRH",
  "key22": "7txkoxSpjZqNzgGHe8JL87CMNwfy14r1wPqKshy43bCHtW9BgRjY6RdGJyLoKEqsverkHkpyPGkT31k9tfxMs6P",
  "key23": "4hALgEwpueuDitvTQ5EirQz4wJ3Q4mJTo2pR7zeA6cuZnaVeZh9i22CHGeU3YLTi9UgRogT9oo7JiAGU6yFx1wL4",
  "key24": "3szBjXY5mvH9GmtiVA2Zwv2i1ucPLbQWwLMhYuF3sgaG4pJmvy99ZKwktQYQDJKurmme3X4jZGDNBt8ueo5m8K98",
  "key25": "3GTj3VkbRhTYMZzQBCEcmyLw3FrMRg73scSfcES5fUZCHL1MCbgvPWasP6bbsKmsQ2Q3CRnG97ZSPTc3j6q7mVpP",
  "key26": "nsmAjBD9igCfvkWxpXYSvr7tyka26kocNCfUjkjtDcJSPMwAdwMNDX1dCZ2WDqiTeKpKhuxGpf4UPntSwiXsKK1",
  "key27": "5EXS75gdSYdTjRJwFSKj7kQ1LUTkEzhdvJ49yCJD3tLoAzRNGH2NDQULFkFTs49zgouGn6EEvxAa2SgW1tL4sSQB",
  "key28": "4CQCDpMhLiwjJot7KJsQVaPvyUtBCnxq9tk1egHYZVqwSz2BGcCvd2Kzp3VivJLUsevvE8vwD2ECW5PJcFRRWEAt"
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
