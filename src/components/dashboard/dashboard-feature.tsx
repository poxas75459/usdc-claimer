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
    "TpWYWbvBRSmbQztkeofyNuZasoMfHLQhPuRoowgFfVjCuqkEMFcmZJzL5zbEwWQkTVapmNkE16atCGk6kEyeigC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KHwbFpwkgTDxErmzkMZbD8WaFG8VPN3J3q9yswWGG6qDTYhq9trUo3uHcT7yjEUhcnSMkJ5Siv2qFK4GUzEsJtN",
  "key1": "3oQ5Ms85xQsu9v4HJVFRjQN5eXzy9uH4PLjuEUUrEABtjUKrV3R1KEN8Y2wcBXKRpxa3dazsU7VrbTdZGkBD6TKL",
  "key2": "562Eyb4Hyf6vciRaB3WUEcVG9FC6u1qrkhMqWAC987n81MZFfBuPEdSA9Ak7Hr2r8kM7ASA2ryVJVa5USkZtdEoZ",
  "key3": "ZASpps2nxkEWcB2LTFC4zN2PsN8noXfA4Es5ouEh6LrTcuFPXwN6sqgt4iGdXjCYZ85BuK71YKoz5bJxoTQetzV",
  "key4": "eFntMmAJas87jiv9K3cDrer34Q9Nv3oNBd5zpPq4dp39H4ejBe4BXDcV6CzLxqRvkaaw3UwptyPEqvXff4Ps53K",
  "key5": "2viApT6cYJKYki4q7iajKU8jG5hDq7yxJp2nSsyQ2yur7hL3r6N3nH2qWZyo2Me4pPFGWeyBTdwp9NzrAegBi1An",
  "key6": "5CWWVGYdvpWLPFU11PKVLLdGsb1nwQboZKuszpFyUXG59e6fWGxL4C4GAadHK6oqgdjVEQ61WMaqMZwSoVeJTH2Y",
  "key7": "67BpkehggHDgokpg3gPihwpgrMF7tnz77TvNGrBzrqsVeReAuiB2grxP4R4JnWYEVCuUc8sSRwnJdQSJY7NJuogq",
  "key8": "4iDU515QY3ptG4wz3qAYiDBVYLs1AuyqE4ZHCumpnLyYKh5ATWGwurv9B18RpbKoyAnsUA6DZxAqB5PF7NCxr3qd",
  "key9": "5a4x28qR5X17fwb4RF4h4wBTqCdtZScgWfuS2h1VJhCDkkTkrQqEpkbDAmTLnuRfkez7DwnevrptXedigpNn17tG",
  "key10": "3dAo6LuBPyhydsHeFBDhErTHY9VQKghnv22YEfCs7KcWmFivEVVwCUnRZCKxzq2CKfiAoLaDY3MenuPDQVJi2fd6",
  "key11": "57aguZ2rkAk7pgLPh1iAMHbw67GkHhWZJY3sv2QV4YhnE16Xya3isrXWHQ3CVHZM318aTGsrGPC9BZKweuJWEWCR",
  "key12": "7gHQkGkv1GeZLG5yT7rPsqgyqHUFfo8ogu93MCiYFN9uHTm6JGVD8JT7h5z3kpGBfyaS3BKXVuSteftSvGaeu54",
  "key13": "2E9c7Y1nZ1BJGw8y3m4A2iW9AtVi8GLaME2CfV1kr5x1B17bjgLm1JtZygaa6LTg8qi3YiRRr2twXutxGxEXuxD8",
  "key14": "3nbyHhBX5QqRmJkkPEY7RK2avnm5FKwiFDursLs2vcSP4HvcFfs7BBdd9ieT8iQeevRZxkuqQhTNd1VgAS22CHFY",
  "key15": "ZXpjUinePS3nWCYBkJe69jnfFz7DCMAmR4hmZZs4dR7gh89aCZM3nk5mYaHoS6CkKQHeirBzC7EXtE8dNgs2JYb",
  "key16": "3pkL87R96BpWTpCSEPgWvseMDLR3ZrLWnaKgT7fGrt8882XzcVR6tVUnpDupXBZMurRVminKkxnoLbyvxhYuSsbR",
  "key17": "2sfPH53ZgwJD2RELqTfKuqkGT95cnYu2i98Weo3Y4taNx75WpNpVzJ9VMNNaDsKLEniGsNgvczuVZKNpvgbhzdcf",
  "key18": "2gCi4cPnhBHD4jiGTLe3tRZwTftHQNQyghKtZ7Zy52pLa5rbnBN4LrKMw21TAibuWaYgxKWJTNpDHW9bziHDCBoW",
  "key19": "3HXPmDXKTe5hkL2g1R8j3MyRLD4QgZeSuNh7mr4ZCd96QqGx4GaxDGwrjj4eiU7Nte6hhSV5kC1h3TMPy2Arb4QB",
  "key20": "41TjbEsz4nH5LtUuxYnjYspAHegbHFVfZMSeen7hopUGkMqkft67dLMMXUhxHL3xgJZwW8wi7inbK9qvX6ZZbzon",
  "key21": "5ab7ofbxk2WXvFjqDSzzQkQfG6ia76YYNrnHqoH992Uv2oK3e5JvqkXbL31BGQE5nysih6thQ4GKbNLWpwWkVN7k",
  "key22": "2ktKVBqnr96oFmtPucDAbrNNTtvTJVybe4MGYpSyAwK954QvawEArWa66jmSKpisCNgnYDW4oKGmutzEqeuwuGLN",
  "key23": "2mbNskMbBtS3vYRtfEbyEvV33viUGvudGcs948Y3X7uZDmEDHEb9XpM8bM52cjc2dCktbUgbCoFcwd4jGMrBLUeZ",
  "key24": "5NawqNFgEXWU9CWvrqcsQySVK8rN8eCukLXSyo527AwEc3aPfLCwgydEQ77Rqbe8hQQzCvi6icuyPEhh7BHovvWE",
  "key25": "5YWuuPejU3WYML2fqssWdsQMG4qxNAeTyhgSWpeBGcDVgFA6tQL2rba9xppAS1jBEUjFELeBY193EkGx9MBWDkZ"
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
