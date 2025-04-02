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
    "2MYmmcio4bP4Y2UmgWS9bo7bjrPJCv7B5vVU5KbQxLU2GZVeg15mB56KhgdiMknL5NbZgFwtjgWx8VKznFUDVWNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22YhLZJGRN6NJfjQ5tSzdrqiKMq66QZqpozEnszFGdjdmxxUJjW2gtMN21Dxt8hrrNwpkN2zyNB4iKViMDkEdic2",
  "key1": "2UWWvHBNW6KnsCQvazY7zuWJ8qNx8FkKCByQacadxRyptkHHD9YnV2Eao3Ru7goSjNnmGquEKNhb42tN2tj8Eujg",
  "key2": "2jddtRtHkPbjbMSTghX96RwTZ3tdT63dBFVdF1uDReqUWU2FV1eFUZe3KioNA66KpqXJGM95aoUPDRB1bEbxb9eH",
  "key3": "xntGQALZKuPNZYwYj91tpcRsDoUVogSF2Q2gxnaS1deLh97zXxTRw4yzooHJexJtDbyEVP1KTDXoXruEXrV57U4",
  "key4": "3xfYAbkXRZ2pBik2XRvZhLJ7RVeauronWHUsCpP6GeQoGw5AKTprLAxUpSpMDu5AbrqpED53xLLuVfsmQsdjM3BH",
  "key5": "5K9haociBhUZ73SGMAw2Msgj953ikAUMUKiirkUukjm1jQT5Jm4LSWbnCtnZdkZwAZtQszKPWMLmAPz6HQq7gptW",
  "key6": "3cympRdrm9ZDXdg2D5MCh7Y1TqMWkDKe7TGukQPaQncz8VqHDBrG59EBJyu63rYAf3HKjaWBJ1FJQWq25ZbeyRKA",
  "key7": "2eKUxR7ZUKVqPeiQKb5zjgMhTSc4xEkukPubCnpWd7drDvGmwA79bLyxvb6FRmsNRbbZwEShRkadVATeYFud8ffA",
  "key8": "47VNU78yyGFonXswH5448aTFbZsh7uC83UskbRWx13zd6rPcAb8pp9JbyGUne9vktGcGgwyrRr2GjnJyC8W7ywgv",
  "key9": "2zvMEpXBwfEuAPZ1b5cq6muCCauFsTiivkP9XMDs5j78uRucBzVEJNL89GmAEsCuYbt2JC1ZEM6k9Eu6trV1tt1f",
  "key10": "2raxKkPtqZ9JgSCLGX7SNi2mpKaFAgdQ46sEtzYuzPptNUB3kg7vMEnowgMrMbKfVoTtdKxB7CHtsBSMaPh39uZY",
  "key11": "2abXtu2d8PVF1GSegUTH9GrfgXmXyaLwxLtA7WRhCRqp5VuQ46gw9kvtnP3GF93SeE6Kdt8VxsCCG375oQGtKQsb",
  "key12": "57WKJ1oRjPdKHxZzUUTDuPekvzkhufeG5xbXtr6urNgbN4Bg7XHgV1GU4YHWcQGmEqfW7k23sNH2yktfCqVtn7bx",
  "key13": "5CaBez5gH6QV2h3BopCzTy2gAKfd6ymmKeSf2BHjBTgxsBEJp3WiL5hwwaAjgSDsepNF6o7H1dbek2uwEv3jHCfp",
  "key14": "5cVsfLzNDNx7AY4oDjM5d8ms7xt6fVdECzqgrk2WdGNe5nQfXNtZhvYZPiHDbCAZULvNUgNvXTg1RzYAJdsUNtGu",
  "key15": "4SoBDjyhhYwWxmKwz1Q9qReWvyUw1tTojwhjHLPHd7Y1VinGiBW2DFUS3Tf2RjLyVeBpLWN6ihKkoxvDaKR8cQJ5",
  "key16": "2UWXasheDRPHSj93FvDcXhGD2vm8q9fv6QUfJ4Ver5TuhmApkv72htYuMow6TUY79AfFLsrzkite19SbzLBnvuNP",
  "key17": "YxZ63ymKsFiE1ZP1zNKQVwCSGMivzqXG3WFhWMEhgS6ns6FLRXFuHvRWTbk8pFWUE5oFNKKhREwqnVpAzzQYDxT",
  "key18": "61M3jrh7d1F23RFMKSGMi4CWCbhrgrd8vdE2y3kewtZbhYgMmnNLoX1TwSbvu7VFsJNJiqHGfHJEQE6RKG2QJnG",
  "key19": "5DGSnVnPSqcUC7N7VfPzXmFXmYmpSjbTNV4YWPFVteyVoAat6SGvw76KoEvE5To9Wfa5pKyzdw8vGbjqhnjijWhZ",
  "key20": "4FZZDbDZjG7dtP6nFiLbHaukwYza7SMDfdCn9Ua1HZ2KE4SoZwK1u6rxXUJf4iQ9JqW61hvzvJBvZAP7oUmozy7H",
  "key21": "3CDd6DZuA8Bkppx7BKPy7xSKLjd3gm8WrPDiaLtZusZUGEDmVhvRi61Dfw4o1LagNtFAzbJe8cSc7Cb56FPAFu1Q",
  "key22": "uJKVEsjLnCWJfcMbK7ve2Kea63E88bvd7SRE9gNZp16pgzT6tEEwVqRxqfa5Egn9u4b5fkZqymGX1SQTLf3HVGN",
  "key23": "3SeHkExwHn3ZuML6oxhgd7dKUyKmDPFSWex9az7EUZaEkXX2YmpnadV2RbXe7hfeeeS3ZfrCoLyLCmEvBSyNKSeC",
  "key24": "3rcKhNazLKRzWGMQLLBdJcaxMJqnQ18awSQ1bKNRJWFgYh81PHrRMcZ7NrEtnKNEmdR6gdXofPbycERrPBwxY7Xc",
  "key25": "4sEUtsEiu4xxgiQa4XTbfNzZiiF3KGFi6gytqP8mrx6VdjA7c6LjSwsSxMnCSsgfwXxvSj9vSxg9YZMPo8vfHbm9",
  "key26": "5jrS3J89rP6eCHVSw6k4vfB2dPYMH9Fvu2cG2ZmTBoXC55tZ6fSNWUoD9CUduPuHRUhCd9R2KYBEo9WyJYa5Aatd",
  "key27": "5hbN93XzdbwaHXE2NoRMuWtXoAzWM3tnPCMEBMTAHtPSUMX3ZNr8zX1VGfrhwrfQ2kFL58DzGz82TAW2Qeb9w53E",
  "key28": "a4pzQsmfDJJAUHKfmsdGp5sVvyZruoyuzV9gHGdpMZMLZcTprzp4jW1SLSN2SeF498EnTkNJUEJ4MqUNr9nQCq9",
  "key29": "4oDNunKN4tJZBr1jyJDa9wGx4U2vFaoqzABYdL1DiLeB2xVb9fELTHAoWnqknfB9Ugkctrmq2yZ2aKB9aSvnkNHp",
  "key30": "4JZfhUKr8w2CkXRtRWgtjuEf4VLj4aB7JPpsc8Kx5BK8gCkWYxvs7CqTD7jN9Xhx893wx4PPWaqzBS9Vb6MPDjga",
  "key31": "3iVtCgCXkxqfxMZ7UXUQojY2M1pyfCC9Jk4oxYCcKS6h11dYJsDcM8448Zf2VjPoVoSMZGommjcJM6oe8enrLF25",
  "key32": "2v51DcfDtsa74JDVxLnvmapEqZs8p4KpSLYtjmapcLJ5owPRyezbA6bFNfr7YLvpLNc9Bcjrs6r3MdyQPeDhzcAA",
  "key33": "5AR17HR2NVTqfkgRMzQp7iHeQYS1Tk5jXuiNNRswxPx4SDwuVK2cA9DLXC6YQgK4yqXrsiUtLsxPjWKYcA3WaRv5",
  "key34": "2SAviJ9JSg6eDcPLAr1dWy1oWyLJ1QDL7wFHAckvAxKqft6AUSss7uPZPq4uXUXqfpKvme6X5aWPwhcswU4Eq4nh",
  "key35": "44qPZB7kLB8vq6SAFnNfbynphTzWoyuFfep8TsWovzbmmVm6tRQWQDeyAPzLb3SkWRLUUgfyJy2BcyhAn1xUyQrZ",
  "key36": "51CtdQ2xMFL3LGw2HVH6ABt1MSiN7XMFPLgWEUHZkm4W3q5f46JXmkLRLBHzfLE92pb1d2tarazYpQGworuSBTmS",
  "key37": "5HU86Gd39ppemNjTG1ei2FnkUJH19XqD2DYgppy5e7JNNrU9FAFvgtCeysBtkxhb8r11VBBfUhEuwBaPtMoqLDkA",
  "key38": "FZPosqgg3WKikv8Y41ooPbntMiTQYzfDN7f9FcuLjyQSmDZotrT66dQY2HDVw5ZMDTe5q8gKoKYnnzCFvwuYNw5",
  "key39": "3eqDnurvDmFExA4U7vFaKTWHBpaXEqE1bDermMeqVSxr8Y49rVvAjDr4dfbVwnQAbYBCFjmPA5ZRKJvEEeha3UPC"
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
