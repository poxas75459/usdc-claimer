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
    "51XdAXSNJ7nM1rVG8o93LBQtHwCikTs7AGm5yUwztXncyZyrVoy3i7SzRWNPQXUbUpWL1wZToBGw14w1QKQ6mKyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfXyasZGhq3aDsCb9yPXFg2VhhftWpyFtYVXVgehhuRwW48D2Vr9V2UCWh1dK7sYycFeH2oSXsB4MQ4DMKNFL4k",
  "key1": "4fvt8JdUgufmYzLj5rTYfwbwYLJQNsrwxcr5fVY7vWeyvFujCDX9JkKAwfoHUq2CSmkhzQMtjD2KHxqvvgj4VHKw",
  "key2": "4iban9XotBJNkBRfHqhJ8RAV5324WpsrJravSs5CETaKSHwAccT22qpRf8SznFJHtxkfS2C3h8F3BgDHDfzPyw9Q",
  "key3": "3ceTps8WHuFP5pZkiQAe5jzpxmAWsvUKFFnbCBaKBsteJocJTFXNjRYakvvV5WmJzGgUMspqG1b1UMJQroedxahD",
  "key4": "47LWj5MK4ma4cFWLumVm2KaUq6YN9uckQm6L8jwCGa8PCVVphWLf228iWR63jWyB55RWFnSFc6EFoGPo62s7ShwD",
  "key5": "2DFGJrRQy6joMDZFrnVerWi74LPNv7B1NyXSaWv1NxKEZiA7boBWr3wKA836GVDmD8ELucsFHZjtMM5i2KCoxvxW",
  "key6": "jc4hdk45KtLFobdaoUaCk6ZKoRcKfffCgwSsBo63VQ8vvY4jSNmu51UmfBzBXJZjBnrqzujSSJ669vS4FK6wgxL",
  "key7": "4NMQNCLiaB1fDXJhNmbQQBSc94qFpXh65RedZQyCvpLy7CWRBX6Zi3fM3f4TQSLh77gJvhMrpXoJmPutNZJXEJZF",
  "key8": "3updPBQVhZFBCKeCBWf5Z9dvLyUxB2TbDmYQ8Kj5z1yvXdBK1Q8hqUu9mt5DRNUBnArCLxpUA5dnTnpPDt1LmGY",
  "key9": "5ChWhFrv2fnYUhREWPx2e66QFusEWQLF2Bwy9yruGB4cjrzgEY9SijwJYVkdcs9KhJtvUsXUoPqBjn7QvVraxnph",
  "key10": "4wEyaPxgXxNNpK8giKcQAxeCAne7X4HJbnL56rmxks1Zim6dAj5bZSCdSu5o8dCrTSXLe79qV9sS48PEVvQRbgPs",
  "key11": "3uVuwvdpDj7xZ1xRhzRuY6uMk8DMCNpKGF8Se4LLEggGQ4KmRTaWAFA3viF7wJN9nzEyXUKcbwxe6FxyiSoZcvvT",
  "key12": "RVafdJnx5g8EZxWi4fUiM9grpP6YPrmq2frNTZt174UBxNniqq3ZkQqQ2vDCnGd5J2h7iVNAbQeuhYoY8G5T6NX",
  "key13": "4xahxcJvXc5712bRxtjJin3TrGUR2cgvdNztc5ghxKpoJ9wdF2QPbv1p8BwMSL1dFELFm74pV28Tk6at7DzQUeZ",
  "key14": "3qjwk4L6t2gcJ7UsUtPdrHgXBUaD8ADAQzhXs23USGB34DdfgSgKiFVEaR8oD1gSd3EjEhZuqp69puAajX4ndaR8",
  "key15": "4aaU7rC9vyfJduUHarxsR6TBr9ksH3gKyNmQcgpWaRGsohopYS2AvbxcFph9ynN5wzZjbbz4Y4yuW4AysSgwtd84",
  "key16": "4HpeHDbjNEcoveA8XxcMyiXZcYMTNKqgUGtEiEtLL5CdH22wnFhrQLtLqvV1LLcHkadYBTtb9LYq2cxVTcCwmFJt",
  "key17": "2diBM5mWuq3czM2xn8ZdiniP6ySvKypLAzANeZbEyzhYYTrUfZitbhN7r97Bjvdq1D3zgXSsu98SWp7Q2NdVXiXH",
  "key18": "5HGwHtLKBngLvAf4PHmhwVH72yQbnqiMvFGVbvdAjANRnTtLXGxpo2J2LrXeZ75c9LEF6ssWu6G7FWJ9CDMJnE3",
  "key19": "4sbUp3nrqT5kAfMhnsyNDQS9RzTuWqDAHYB4AWtYBEhEeSKeGnPwcnSzfSS9WAdgc4362Hv3QAtaNdwU47Vio6h3",
  "key20": "2htoLxRtFW6g4wyDZQ5539ytZ2TMBbcbtkA7fJ2wyZZnWFxAc7F9t6YKB9Dcff1d6ijiQHd1Jo5ZdVCu5Lc7zeFk",
  "key21": "43ucfvLLzZjwdwytKrX2epemJbtvqgmFZnEWZ653iHfv14p9W3hyoY7PdNa9N8VgyogoZ8tHvFdPMKRfiAQoWKVr",
  "key22": "2GtwuiUqoLwGcD7cYnxT9meNynXJtA8eGyCoMqag8pr5yTS3SQLB65PDFgrreioX1ZL25dk78Q4Xo9sSqWgD7KGZ",
  "key23": "wU28jFNFUDf4CdS6bEUVfXmSvgmNkwd79mLrzpynBXS76AfNCX8x4jqM4SPR2hLCR8uqijBLr1UAbN1QYrbMuas",
  "key24": "44z4dCD36VDnr26oEzDz3fZcQuWDetCLX5ZpZ37sJWVVUWrus6EEGrgF63xzDpTNSumie2tNH3UbayrQZ1Kb32LQ",
  "key25": "J4RgkopHHCaetVxNQ17ujfhzYGEt1YKb2FgghWXyjEsHLeKC1vHEviLnnxfhA1YnJ5iPjgZCuvV9x7nwhSgDCmb",
  "key26": "2kfTuEFhWirxPNdPBrY9TQtV6pFnFifJ6kbVuy5xCs8DMWMiEBeKQnXVkNaASnQqYkUATAjzMzB3qgp69QsSrTzf",
  "key27": "5GyQtUPFfk5X9zymvDsyDpq9fXecvyE5KUZVxAYjGSj8mN8e1yaAiew3AHAVMPuacw4y4ezYBoZvANHaraR1rGcj"
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
