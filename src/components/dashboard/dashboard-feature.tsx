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
    "3K5TThiW9anmzXE2Logok1VMBrmic7QAjeSAvSNqFXit6HbHeJ59sSm3eCNqbchh111aycQvY5QNaVQfmjimUovm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8Jj53aYYs6GuYUmGTvng6864Xavf6F3GSFrMTFay6wwTs9aYV7zBh5A2H1tMVBXyhy42j28FcBZn5veRsLp364",
  "key1": "2mX2wor2Hn48WBpzRMmhSRYWR9QREAJ2zg67neWmzunNqH9bHxYZcCJ2mjtMKjw9EyoGubQie8oD2pyvjsEy9uJu",
  "key2": "2k48raswqSwUo3yGCEfMk5guzE9XhTfNiW1M4YjqxMaqL6HzanpbuwW6cAkWCrA9qMiobgu6ooaCYGRh1pkE85m3",
  "key3": "64DPMpQjqALqaPkhGzkW5RJNfMaCiusiZYg2YAwH2DrEkX91AptSCJhNhRbCSGYU4eUfQwa5CShgUefR8jnSXEGa",
  "key4": "5VCoKu7CBYpJsY2kS5bn9Dh3HY8xKm3Mo5MQzx1otr1AM9oSLz3hWdxZ6ARFRizjFA8pMZ4JeJRwAY79ymZ92TLr",
  "key5": "5CD6SXRGjTeUdAByMR1bvjKJaSGh3rDm9DUm33bvFX71y7eC5fjCrbaL3bYpfByyN4KxnVk9Yu3ttFJGiZrhfJ7w",
  "key6": "2pW5EQ8sMWCvktDUwNkxyXGXwvQ2gjj228SssH4UgpkXecW949ofWfAVCoMw1xywbbcSjzVdPciQZhCKWWjQWArB",
  "key7": "3cnKqJ1CgD3jiKRR29kZd18apAayNug4cn6YbMHhehdQYnDXFjswvJHokopiexH2o3WLM2eVCn4RDBc5AThHbJ6U",
  "key8": "YVG2dCyw8uEecx7EBFyiLX4wgz1cuPejCmWB9GYekLsRC9yanYKvHJXoEeSWFQzU8jvu4Z8bw4iEnYUkLHzUJhD",
  "key9": "Ek8eN3Kwmg61r1ZyuR52gLWjbE8iX7yGFvbpayq4XGowUz8qy6ocqNuRMwgc8GAnFotCzaqS7qJgMVVSvcm2eaF",
  "key10": "3t4AULpDRL2CRbe35stMiBU5j32h23McWEJX7Y3NGCEHU65wEDCi2NqCNiJLWnEnrmwCaZChKwvGDns1kLPdbPox",
  "key11": "5jB4wD9D8gqVDS9QWFHiB6GXdFfx4PhvCq1QBNPr85mbnWRBr7uv23Nr8xUj9bPY4bXJKcBemU3MhdgX9yB2zbk5",
  "key12": "51UfeB1mjL4CrqTcJM91anftQY5xm5r8iSeo5oJbQQ9vmvfrLGSsD6WcMUhN4dfzqD8K3EP9RSjiMdBeenFL35F",
  "key13": "4etuFCyD6yUg2wnB9Dte54oVq7eauk98er2TuFrPcdVn57t8RpQViECDdwMzkFPHjj5t5L8KGqTmVhNBaCpy3Ga3",
  "key14": "8upG7P4NPbwcxeFGRZaSnHWqSMjxCm7ckV8hvjeHyv4KbLkVPHjYMsJteq6ab5ssU2WyVnxKG19VKGd3u72ZC5U",
  "key15": "4TSWhBgnt2mohtJw4vKdk823QCQsAnZ8JGhNJSc4YeaYoVed4Xb4NhddRZZN2rxyF5hyNDJkEcE7Z75pRf25VMjo",
  "key16": "63eE3QPLXPWgnR62L7WUKmEwQwprgKMRP3grZN1yQa6KQM47pgxn7gSCRSPMPXkYxvrNeyvQQjhV47s35Nezh97",
  "key17": "38SgSxtezrzDARqQTV6iuJpdPsbsxmA6kbEm6AaZFSABUmgxq3cvPsFe5cFEF22QU6S6HYsWqmao8KxDEZ4cYKvB",
  "key18": "3fLkhosPo2T2AeunsPbd5GpYJvbU1NpVTGS3PwKppCBaUadvd7E593a9fNABwSGPkxj8b27aWmsjPWtRAXqM3adX",
  "key19": "3cQf4m9Hthab3wx2BJkSqpTGrmKMUpZfZ77XPuxLutoEXQm8D1TQAGhTUk3zozUn1BR56gmjE7R9JiYwdHVRRXdU",
  "key20": "5BB1x7DRF44TJPnhTpUgM2YUQHAmguYhrC8dp6PfHN4AymQuJ1eGuVuYajj6TJYvt6m5AmyaezrcsrBQWr2KUQrT",
  "key21": "4FC5xxeCr3MFUMUdS88h6HM7Txvntvns4WSD8tpKZgTjAAacgMGrnsi1JNTNmJdha7SnwxXYd8iNEWGVURQoVR76",
  "key22": "2K21EkSpeHh9snnjQkRLXYp9zykLkT6u3RsukmUsAHa3hkWKVUAStgHcCsfhGnv2m7HH4EwAqroXHY6RWiiNV2U3",
  "key23": "2GyA7MVDeoWPwKCLEuaHXa5D9Pxrfb44q5LbZLdrLRvo3ffT7R8SuS1aWyDG3oyMw2gGa2RfNj8qFFBHT5f1tfxz",
  "key24": "4pxJbZtCFJEpETe1gjJH1x4uoMGgzmKPCkmGQG4XJtYM6PFmTmezKKXu3N5GJjcQCNVw9XYEtQz1ydBbh3BMGgPL",
  "key25": "5y8GDQXzWwrLTdk7Mai18Sh5ooDmSLsZCbBm7TAf3SpJtDQ2RSMLZWV2B5qBSpzVFfzmdUW5eAUuCMpJZQyEpm8H",
  "key26": "NboFLGm8tmosq2G4NWknQFcMKN9bL7u7kpTbkvXpnKBrSQ8tCAZfxqfrv2Lj3F9R2KMqvrKYWCjPz4r9vPaZkW6",
  "key27": "4xizN95UL98QfXRGKAcXLqyeCQwEHybjiULTo2JHhR1CvwtCG9oMX5LLosVARZQ3QtiVPz7LUABRxfKpuWXEoeAX",
  "key28": "2VESLMeKvmnTarZdkfqZsB8LSRseZLoAxwJMuSGNZNCB21wNp6JTtLi1BvdBMQ5w36wFaH3PYT9HZVRR2R7obeV5",
  "key29": "64yxP4miKr4iUKFomH8gsYTxEZUb5EUZLitgyAcx9sREMrbhLDyamR4Vb41UWkUsh2K8iDRMLYLrzutaY4xeppQ6",
  "key30": "5ndD3y52Kbq7YHyzAtRjqQh4uRhP3QHBh8o5g3pBkogSf6WS1uDujeAdXkcPAKH6YjX9QH1Dhc8QFujuifFom6Xz",
  "key31": "3iKdJHHiG5EoYMcxDV2SFsaR2nRWifaQVGVKkRUQ945Q6N6hriT9NtCkWYjZC2zUG2VFfLgyE43fGB1khCmc4NqL"
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
