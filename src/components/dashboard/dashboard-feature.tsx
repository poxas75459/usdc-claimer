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
    "2FdmTdQLLeZjNZmbG9kbRv7JRyE4thVGuEAQyXnNiDTakyoYXMQMPo9x5LDhb7RcGLvaRdZ21JEwchykxkQ7GJFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DnpnebmDz76PLaW3uiMVmhjQALe17RaWzxjKwFgs8tKZZ7haA64FkRcfLY3zbc1EV5ZoeZCdaFZ76aMfwTHuw6n",
  "key1": "6245GgXSYZCzCgS9vfEFW3DrxVV2FQsyrLt1g9khuwTqExTts3EQZXVckmn9ZQmK6TJMamPkshsGJBb1vATDE3rh",
  "key2": "3Xi6jH1Jp7Vf7g3gDpHToWn3ASSCELHY6ZjapnwEZfPZkkJ44eCkx5AJFYGgkMyF5VoasQScaw3MswWjzT5dXdiD",
  "key3": "DBDLX8FEZEkzMLJJH3FFX4KAVCupk6hEFGRd2RSFi39n7mQfaBEhdtP9nZL14Ws9nKpfrWSouUj81983rVrho41",
  "key4": "Lb4todkt25a9oief6rUXTy9h1CsCWrdyXUBCQGVrcp56HnjddvJiPHamm7kstJLoMhP1bgGZXzgWpchL1eEx7az",
  "key5": "4j9Mec5fc2BeLtJonTCP4omDqowiH3FDvqzHa2ZYKze7hKLUPFYTdGeVqexCXgzNMKXVhoSZ9VEbADqETUoV1Dvs",
  "key6": "79sZEw7RXzaSBjz3EP7wsxpSTKQsnH7u66G7cxcPsUuWc7mmwRJsaj6af4g4k1h7r9jnrgVQA6oLDyC8BnxhgVa",
  "key7": "5jUjomqY6wKX8Pqd1tGhu12rJhgJfNLyh5NX1vBhVtKDbtV6x3aGKudSGWcwT18kLtsaUSG984EfFRT1JpfwyDuX",
  "key8": "4dxhUcmZMmdbSKechYy74PFT3aUS6p3jkgT5oJx1oZ8Kz1zTH31vTQArCk2HWXBbDoBQXFYjfTy5jLrRcUN99NTf",
  "key9": "2G45cFaaG2hhRoYFB8Z3sDqaMz2VMui4iM2oJxJhgGWCw1zifeuS3oK9XQLtMNKZ4EBgJPpgHjpFN2ri4hbWsymo",
  "key10": "3GMJv4Cm2ke1Pgpmuc6YYr6JFjMW93XbmNC1BAE7hoa4h1KmdnkUJcBd6LvkDaaVpstRx1qtVfdy9Dg4MsLevip8",
  "key11": "2LDQbAWDqx85gAzUyTDejNux6YmtejGGSHNfsQxjJsmvYjuiECLt5E2wG91JcUauuyVrKxR8CWvD2eQzSGoowVr1",
  "key12": "31MiwA9mxtjtwRryqkN9JrMAFVxF4DgzZFbE4YTqeYLzHQkVTHK2Z2hUeyjLNdB2mBd2A8Ddyq1rpPbP7tu2CGW4",
  "key13": "4WhZuwh2Et4g6ebtbaafbH955UpyVQ6NuwPhFHn1nVHxsPBR2LJV8cnuKmWzYoVjJdBoECCfkG4oU5GMfkHyN8oM",
  "key14": "2c5GQHWmC7UJWAorzGNrmP7Mvndw4VASzugXDvm3wkNeHA14mgpDWwsoK574M1foFnAZQ4tA6SMG9JpvNHEM2g2o",
  "key15": "2yhtSUfjTpUT5zFJ231nkCPbzfk4soJhgN3Tb1rGtc5s6WeeATkqiQvNdBSqLPshs8qzHmn5wiGR59evb8Ey7QaX",
  "key16": "4gvmErrHQEK3h96oWxi4quK1f2RkmXGa35xGmEzVQezitirGMEfhMTnk5rShsvA4ibNbCFEPv9QrrN7HQqTyFyUN",
  "key17": "4NpME7asJgYmuNox6rbfyh5wFwiJavTtGxBsoGzzYeWwM9fNE1viiwTYNJmgoAueUTDq785g78c8fs899XbkeZcX",
  "key18": "4ebrp1FSBaA2U4uyXP2YXKcSZm9DH6PiqgGWYi9t1M2ZgYK4W6PZCyiV2d9gsuquEuYJQ3sRjsMBs1oapMUfetb1",
  "key19": "4RmDvopGcqxBoAP6XCwCH6P37QZpTCL4691Ra6xRSz3i33q3aTvy9uprAK4MhxkUSbQGHVqKetD9Qg6toapeXrcP",
  "key20": "2koyWDjKspzQHviEMzP2RmfJWxrjrkrhiS7e8SKiSeSMFnT7fqkCQBUiux6GFVna97KhearSTgZKWc1PzZEBdW9p",
  "key21": "2efh3mTGSbNpto3B69ZFxWAWpvdj48wxj4whf5oKM4NBVctd52AmyunzbVCAo5dq1mPc8SsEXippMRgcRZ99jfLT",
  "key22": "4ZAq7KL6kkGsENtcac3WotGJUDaFa9fsPEeKbSqR9kFHTeVk3RE4wtPWrSMpFoAqEw1drvi6HEGqEFQgJuUwufb4",
  "key23": "57hutTkVEbFgnBD8k8XLc7u7UTH5kvpYmLc1H36CrdSbYxLVMV91ZYDpYi7hxaskTaNHf6Z51ECbtnmyuS7wX3B1",
  "key24": "3GyzjTyLvE7gCoYcn3x5RqfGiF4YgZ8d533u8fPmF87AaVVZvJV1qjUFKVNZn13Bjfm5c96iTCP2JJd7REi3AbFx",
  "key25": "N2SKRrBE7TrpXbdeqbm6pXE85CGZCUPSu3F87sGPqtNDuSo1hGWx76ArmEmCw73BYzz73pkFEmssNVrghzMBbwz",
  "key26": "47eLb2CwwSaG4Lr1NVmArbCLEZ5jZCGApgmFKD2A4tfHG1YKo6xkH4a1BikbXTNdvnUBwhKgZTm8RhTxixgdbVQH",
  "key27": "3bx5BtvtT2Nh1bNmKScUzV4sXn5YbazPACLia3wNQnq8ybazxxhboAufDexeruxRnmuVFVbk8PLeoZn2Dp2i8sPj",
  "key28": "2cj5VrGNRLbFYcKTv36fvZmnaTwkH6mYkVjh4NnNgKQu7RwuSpsDcmh8JghnGoCcHXQP5rYzHHXEfiZzVtXrMAN6",
  "key29": "22MziE6i6389WmyL31yomzRwitCrGo4stbwYtikCypZ78GQuXaAWAAzWpE3S3ocEQHiYpPEoz7aa32EwSZL1prWm",
  "key30": "2GvUCHMjZNwhMExsaS4qcT6FgzzdvyCbDr6ZBN2xk9aKPyWrgS4LEK1JzT29SWFiXYxFMsiesG9Nk7k1xXAC8uqc",
  "key31": "JtP8hC17jrv5GbhijJUP4PQ8G5mkPdjFR4Uw4fGPeUSbZuht316VdyBvrRpb4ovxbaCkXwXTq5Mh7d2Eb63vuSk",
  "key32": "53LecppSQ6PWSJZdV7vQJ6xcQzGkLstMSzwhu9PXP8pSWv3sCo6t1HB6RAHQRdpZ1pUkFpM6GtgSrfUrUU4P74YC",
  "key33": "3xsC4AG8xS4hpowyXYon6Lxv4tmu8ZY93chiLkdjMo9tMPNwjK9VBfLEsTVUWSA6rCtm8zHcsT55Urowc5pfAmC1",
  "key34": "5KFs2jJKSwc9kqGv5taKSQTZgih4xUQkqG8LuHHwxhAhKMuQ5XgHFEqHDeqjGTWGTW6pG8nsdohTQP5iwp6Zq7hC",
  "key35": "26Z1FnAjGmTxdZLoZ8h5wbFVuMw9WJQarh2ETP6qrzG6GooC8UWWLYzEENe5b3qFLDnFHLXz1snjMUSuQ3orwkvz",
  "key36": "5vuAArLyxk8rPkLy3dAJ7QWvrCbVwoKsw2ikJxeJEVYyMynidyrnRbmie7x8nA7DaUyyPzcYZL8FuyFd6ka9Ao9o",
  "key37": "4xGTUZv2cVUWXRw5jtDmQprXLdqY5P5FXXtxFvw2Ld9woTB1inTE4QiCo3vvKQKRWGpnxVLikMkMe6AbRSpHXBSd",
  "key38": "3okUqEU31h2fb2KWEuSBWFK8U2NjwqpL6rDwkHJqDPAQMvpWMFA91VAaDw8uWdvrqVXZQ2yzq4AZBvteZ8ryTFEy",
  "key39": "3h4Q9uqVRrKgJMu5prvsrrfrukJoUo9skjUw6KEKEZck8US9GMwFpDu6m4pkFQeUMheEKtQd9DeGNvfb6iWW1wYn"
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
