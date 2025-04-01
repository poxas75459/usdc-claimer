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
    "4tNiUodB61PyQjz3ZcHoJGR5TQskkKuSnG9WYo7umegD9szSDcVaRLTXaacYSEkJ6H6PBUT6eQMMW2qpgKrrbGsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "324zPJFHAA7is2HSTPh5vKSQ2bJnDAHqohusNHoQXTr7nykHWQ1h3naH8bvrX2NxH4fPnWZNe98x5mxcqaB1CVYv",
  "key1": "469Efz49jt2TgBqKEq4V49UirvypqBsHBySi1k8rZFU7cF7U3jBVFRjFHJT7MB9bUnq5DEbgvUc1GFoES6NrWaNy",
  "key2": "3bCuVWkKY3EXUjrEC877z13owiKBaKax1vEgF3YQHLytMm6HbzJ6eApAuTYn3aYVcF1A8SnjaGLdU2UK6oPxcpor",
  "key3": "4kTB74W7AvsnZcccQA7URvmL6h6sFC5Q1nvAERZX1wsm6T6tbbsfrXRtGHipZuiVDexL3qyxMo6voqmJCf9HbYta",
  "key4": "2HUqdscXNYgZonKC1YPtEMdf9mqVVuMgXSCHHadiWu2tbgF9u4rPyDribZ4nKdo9t54yZEydFTh8QmctebHeNTcj",
  "key5": "5ewFqB9k2ksFgS4YhasGnpqY6syrZ8UNuKMb7ysE5SC861w3dxfs2WPTce4W6fgaLvNRSxtT2ytdAviBt8PDwhHE",
  "key6": "mXYc2omVBqhrausESyaiz6rQH1fhXPmZXbdbHA8EdKSQv4qSTakYqxGE9tkKuCHF6gUjKzzho1c5Xztv8VawQ8F",
  "key7": "5VW8RZrQtrFLaGtw5L6AuZfHo8RroJ2a8SZYDFo7ftpGFfvDSYdzBGLZsR2FBj8hsHYdhgjSQKo162Psh9CkXGZv",
  "key8": "3ejDtsGwsxgVjRba1asm1n8vSyVcern2LUv6YcxoXxj82WmP7FXYd99dtscBxE6cCzb6huu86bz5Yi9d5bjaKF88",
  "key9": "CYwX6xVuRsRBkQver8E53Uj1z922KY7qLZdFFMwTuLvpEFa5xX3vNDsgkuXwzVmH9kLYLgQFM325EneZYdHMwNk",
  "key10": "2n7tqnrBJj3ovozs9AyvCNyJpw33qWyrmoNGXg6MWe2zz42GeVLUKYZ47R3zAVgg9Zc9aUakqRrsKKfarsS34p2X",
  "key11": "2Amp2FTWCYGUEz5UjzxKUbLhomgtxtgoXWiXfKRaBJ4DyK2g7Z7bHpzPvdSggxTAHHNtDfUDVJbCZLuMV8o2rWHE",
  "key12": "WuznNF5sabUJAfg1J1DbFYNFgFgU5TbaPHU2qGYDgyrRQUap9Mzs9LAKx1XoKj4hQCt9PL8TB4oqmrZneGVibrJ",
  "key13": "3kH9ZgsYeXxUuCpszcALozX1TVZEvKY6NtBQtbU7t3GE8EDtKQd7zgbPN1La8PVT5Fjegs64Lve7psRWjTGjBn18",
  "key14": "4LE9rcaAWsyxTRA3sUhnqB9eb6uP9Vq79QQ9JMHX1gsb5Fuoa4TmXXVEi7K2UYQ5ExkK1KhimDVpNpFAR6cUp6q3",
  "key15": "4BqBhXBe6J1izHBkqpdixynMs93dVUVnHppfjzKhceAapxgdFzVx9K9kNv1dMDtL94yKwUKiwGhEuamGeqfMzrHu",
  "key16": "5TRqAqLigPgBSsee5UfmDFefeuXV5HzXXxHNbq85WXqCAUQAHDmeXsECzjNaeRrkCNxEmNDLjGawNZCDci8C8BTP",
  "key17": "T1nhsemPcSizxUU3LfSwbyLTBYApEfTiKo47usb4PLG1dG5gaZM1GDiyhiXLCpCi27PNPLrFuT623hBKJ4g7MwK",
  "key18": "2UwRWkB62LCnHkEPLBdnPKqBKXhxWFV7sFEuov9RCiJ2QM923TLHjrMzKmkVc8PJfG5szgoWBn9fjzjaCZK9Cvb5",
  "key19": "4gRMCJWzRTMU5fM7kFDbQskYytnGh8WokU6BiSdoEtUyggTaC42SiqVhN42FFXJuc8rxyUnBc2LikXNhDMSdV3ah",
  "key20": "HQQhKF6uzvMe4mMDgbGYfepB3EaWqi7ZADxgGLv7VQLSyvHMfcGYH6JxLZ1VPMLZBtdG5GJirRcXUCmHK94PZoJ",
  "key21": "4Y1KEN2jY3FRdWVoX5bsS1nQpddYAuMzT8H8CLC6GdmyekEDPUW66xydBxcPCbGnZS37ybME5AmcYgnZxFqZRXna",
  "key22": "42dvzdCxwDK1ipiVMmVK3ixqTrzenc5uCLVHnCdqPcT6gqs3Z6wUsDLnMzqa8SteabTzrZkLqzUHsCox2nGD1LSK",
  "key23": "4u72AZMeMehynf3tp67TNEzo7qnivzQSVk7hj92uhJnQMoDqf8Edd4X8RrKdVkiQvW9Qx7vwkFA9WuV59SpZDpoR",
  "key24": "4UARtvSPLodSX4zVjhjtGNMEV22tiu9jXgaY2yGuQwubPaYru5bkGzJu581DnP1BbEmj474kNdveoxbN3vu7HiZ2",
  "key25": "3UGqfwqH2LWobKgzpWDQrvFtqsHCAj2dFHhJvkZPKWfT4PNXEg1qcQmKwc74PQMcsRu2AQy8SMeVLGxTr935E6VU",
  "key26": "5y9rWg57gDyHFZRGj27pqebFkJ5YgJaiRYS9MBpewjp8NXE3Fbh8hzv9JmLnBHMecURoVy83CZ3veP55vhvmJ7PS",
  "key27": "LErRwER98FjzBfV4bW5y5XghmhTR4hdHsY5KqXeBV7Y2JWxPgDaeC55tqVmtvEvBtzbbRGmnF8BkiYR1bUmi5bo",
  "key28": "4cyDNkS4pHsqm1PT6xwQfX4WpRUNv4Yf8yqiYYM6BgnNocuGD3Cu3noFptrUSWH9CNRFKtoFDHrWHykpWHQJJrim",
  "key29": "2oxuxgrAcuJERUwxmwEiSUonSVPr75sTd1Wd5B1prRWZQNmQY3G6rwTnkMC1Sp3miiGtjC1b9gRVQcHHHM1CB297",
  "key30": "3Z2Q7RT9nxRn21jjNs1TDNBm4MAxyA4XfR6HhGK6cgBprmksXaq1zEA8bep9VnXmSMjTGwFxTLG59Wn1C6xg4fPR"
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
