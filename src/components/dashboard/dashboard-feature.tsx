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
    "49eNLZYsnQNN9MDVcgiCEmxudiXA3rEFZEm5yeybA5vffZAspAfwHp61mQGfzqi7YsNaJxL4LQpc3SxeeanKL9uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tKgskYwpUwQJaRPcveC9JDZPQ4wVuonS1zJHG8SxZoZvEXGnRko5DMNhB3pGWd7VrQKjcw3WScaHfcDsioc9dsz",
  "key1": "3tX6yiGkKhAYydJR7cFZtMhu3XXVs4AWFbriVD2mCtkcb6WFdcjQQd1vYrSWDqbnw9jtD7G8akYAJ3rCcgJae1vn",
  "key2": "TfSaB5RJoXPd7P65SwM6n2GthEBXhYq9xb6Nr3Z7vPoUbfZmauFocAdQA9yHjidp18FEL3aezWnNN3CLqGhyZnv",
  "key3": "3GAVu1AvWogZkm5c8S8wg41cWyQxbxg6K6KZwgQt4YVQDEhRkmL43Tf46w8kryEwHsBVDmCh6EKU7nD4Zv6bbGUt",
  "key4": "2aWK6Jcmm3qapTHYmmqKzKZPfWTtnbQaPTvaLQwgCKSKYCoGZWKPPyWn5JwBhgwTCA5YLVouxqjSpm73F53g4eoe",
  "key5": "2VZQoTqrkS2E97TTWciZ1Bfc3BT5zQTwYM5adBSWGHFeVokWdEAg9NXnQdrCR7sfmS5ns1ifbaUtfA8AmsAZSBek",
  "key6": "4b2Ymfw5X9pEV8HCx6aEyiWr5eSHf2Du3JqimP4phKuEtB2TnZ5kB3ZfvEitZ5L9c2rm62rgfex7fqLU72vAHqxt",
  "key7": "55r1tESeMTbTCyc7g7zFBB3LMJWpKX6KhQCmneNrG3h9z3ZsmwwewdaqdPGTEMApX99UYzGy414VsBVACaBwMxYW",
  "key8": "2yLZUX38v7j6SfcT5i6fK7PE1PiZmDq2tBWVLPguH9Xb2e5vJqtxTdiPnocmpXeGCHsAt5YLaCwzSdNJeCm4mhw1",
  "key9": "MNeQExwwvuAAvzrwK4ufYpRsq2a7X6nwdF1WXTPumPAFMGc8e1Gx9xHizfDJKeMqu6DQcEqt1TVg6vxmiGCHio4",
  "key10": "ga2ZUPDQmNca8N3crnKtauQAmy4GXsPDNNtTSd1T9ev4rRrQaii7GY9fpjUzxEvEhwu9fdwfZ7KyutDKD3emECy",
  "key11": "HbMCCjoZAWeStqoEDU33tDGWA8okyLY7scnNTih9cdPAcJ3GKJAhmXcSNdNKMXPJ7PYviQdECVzxK232QQERXM9",
  "key12": "2Yhq2X9paGia8oU8hyXBSuYMDUNBorJfFfkJ22spbb7duCB6236YbNSh7KEjcVCCZRRmevyVSYRQF93qduCWY93S",
  "key13": "24bUHVq93mb42QrBxXFGdoYm5CSAg6KLTmPoNaRahjQfPdhs3KKKk2HuXYc1fx5uo46e6kjrTmUEpaMi9LdJEcB8",
  "key14": "3Kbgd6Sh7352rKXVDmK8fqj3R6vmm9zstC8qEB9eueXNeNFjAKH8KECqhbzhLFveH5UdHzkf4Yf3aYxVdNKqh6KX",
  "key15": "4LLSazYszy5gxVBj3VFZxT1X5J3BoHy8KzjpDW8hJwZK3vJzr9UNQR5gVHEk5byE4V6njvj97nK23R7kRMQzjYyc",
  "key16": "56q13Qur6WtQKdfHnJhFC2eBZBfDUtNiv13MWpv6H2j8JfpAG2De5MqehBV75qeatDuRoJHPznZNqMSSgXyd7YEF",
  "key17": "5caCUpN3JVc7fEb4FKWjdkKhGWmJyvGDjfzjGgXpmbRBun4X6LucknG5NoToNRux6Jou42zsm3yJAha3K48ALXfL",
  "key18": "4C5wKsjJL1xHd3g9isPVhetRufhv3VSgJfxE739yNrgtDY84ufrboLbJ9RqKDAj1C6NTzHYzQJM27Y6pxJ1jBfvp",
  "key19": "28c8Ck9UaG73oZKkd4VrttTLvTr7ksfSyDe5XHqtEaWbGYgYhS6mKCgmZgEFJpsXR8BVKRmE77AA8mEnyEffDspj",
  "key20": "4CiWFVTA5aFWmbGAmZ8U6KeqdH1GaJ2fEKrVgMdcKrwfivtjV6QWjhfd9eLEEcKfXN5CpzPuAPQYRkWmYyVUSKoU",
  "key21": "2tJJ2DwZ1oGR78PH3gNCyG6d13Ce7zoZLW1FK8LqnEpzNDvyJs4gjBn5i7Wg8FzA6AUMbCFG8QgaghMnwkeKGv4o",
  "key22": "3z9nvX2AVx62iZWbwHuJwrr658JRDuNmFfMwhsDXZsUDRYRqAGJoiujqf8gP5LAWLYzj2edUEZWJjh1gMgbbiESX",
  "key23": "3PQsaDssZ7yEWzU5D44MNkSDremUwD5nxNmSUeiFRzszPDyhFVW2LxzkwsQ5foi7d2mUKsxu1SmNZwEpGj3oqQFp",
  "key24": "2FU41Uh6yMY4qST3JcBBUzX8Gs4pth4WE7zdGMBYdm1hjTuqz3KPFHUDF2W5SqnXXssKPCB1xgoaCQjQ63xVHgjn",
  "key25": "4b8Qq9MGmzjqBva2gwyBJ7hzBS22isFNW51ZBmpJnvJCk3MV7ZtBhLkym9Kp3rYhXxW3dydzPyCf5vKEdbtQSAss",
  "key26": "56wTNNmZ7MB6FBYmL9468RbAm9ypq2X61ybd75ygR59XR4RrjcCbcKDFi2EKW2X43ccoBL2F5uXLvcJbGypef3Eq",
  "key27": "45VNbCxPtSRgEnJg95CkkMwP1eRoRuKABKMUCuwUknAEqsUqRzvYsK9imHA6Y19N3YzHNMEzmp7X8ULLVqdHf4pt",
  "key28": "5cYZzYq4fQLosVqkKGbKNTsPmfwPs9cDbhgEMLXnPidzQf5mgb7RiwXpBFupn3LavSUWyxP5RJe6qpk3a1QzdWgd",
  "key29": "4obCZn1Nm9WVvuwiwXivpCrThHxGh6PyXWLhqmqBYwAocSzGD9Tb6NPo9MeoGykJSpSdz3dJBmF9f7joUGdGXFNH",
  "key30": "2HTTeVzxCNkoNAFCAvMr4kaXGLTSHr6dmPKFJyUd4WpEiw3i3fyc6iKu288suUm6veerNc9aEp8vEPeycnkstd99",
  "key31": "3cncfmGP9AMVmSyh1Do9c756ELaKSxSEvrYtTc22634sxrKUUWJ1LHGzZUp9VtyW9RiJ7wzKyJ11rLbrUtw33rxa"
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
