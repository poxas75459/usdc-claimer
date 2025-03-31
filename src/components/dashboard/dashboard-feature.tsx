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
    "66cBbE1S1VbS2HAe8zRhyM7fpSoQMgfyHec3SJiagvsQPDqVaKLESZNKQF1gYPzWLCLc2kaSpoQtnWR5Rr1GuXs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zmrkperJJ8NTq4Wv35zCqzuwqFPVvR2FLJkeWKCFBPdFJJnUwjNTDqjS8MsDJVDm1LszsqmXq9raD2G7ts3aC4Z",
  "key1": "2FxPdpkJEEVgPAmt45fX9c7pexUi6ByYHVdqajArnJcPjZ3btLP56P2o2hNWsP9FTz9mHFkAueVyNbXgSMdEutJk",
  "key2": "3971vWpBTH2jpTavwHJ8NoccSR3cTPDyvyLC3HJ6VVrAMThRZMMokbmYaxLAoJ2tiJQmN2tJwCNARGssCAZMBaCG",
  "key3": "5weqNJfCNH7RDxnTj8ptwKFktyJYK2RBfEfNSBRbh39NjFR4Lt9dFYgK6QH4zgypDG6c1vYywna7vNLXGokqLUE6",
  "key4": "p61ZvM2o6VfRmkqhthADKQhYJX9hDAY5xdBRZ5haWoV2fbpQ2fSztf89SkX2zYT1K2ijVgFTzNxSAoUiyizv33r",
  "key5": "4bgsVVkP64TGraGtmdQ2Un2BeYrQPCbSNGG9w8wrKu49NsFDTWFhQa2j9BcadX4zU55151wryNv7hyZrYb8HS6Gv",
  "key6": "3mpx2jqfShP4dBfZeS98ZLxhmzsye7JLsXe8uak5X6ABhMA8jFdSkSgHQ4JsCvHiBhmYyyPdrs4Dg6dn3mHor8Kt",
  "key7": "3uQrXtjjeN6tUSHVwkxEB9K3JGAK1BJZXoEbRCaxuhEw4fJuvJUZV6ErDeHKvrXGzLVfDkZZWEQBnLLj5psdgns",
  "key8": "568T8HrLaxYWs1Sf33fqX4q9uoiHgCiXF5vMCvKaaTyRzx4QB9qE8VLKBMTBRKqRvagG6ucwKVmrNjjgE8PMWDsU",
  "key9": "5CLH5oFVmxEa751nCiV15Ec9t2LfGELmBWGdRgL2zEV46mNAB8FfvZknAiJXkHDSRfiHdxrYfVji3qup5C2hnNxf",
  "key10": "qddfqnJXXdp2uS8S7SS2vJ5t3v4UUFjHU1SitoTfE4Lssw6GZ7tqFxqZcs3nH3j5wdZhj7KxwST5bNecUFcqLcd",
  "key11": "4352rNpSsuvut4PGZ76hKqDrq1NjS53A8yMJNtv23DcmGT9ciq5FyRczZN1C7K8es8dbs1CKdvNe5ZvVWAa4mQGz",
  "key12": "59y3kt3yK15eFiZw3yJYgpKjjVhbrcNAZpLwC8sgYqxi5ETwxFCgWFgrMPziP9HJJRJVg1QjAq2FNxrurJRDfWht",
  "key13": "3FFbiXqZ417VMKEUAQDy6WXSnwasx1MfFbc3gFURPvi1nAtkbWb1CbZviiKkYaHR6twkZV15qhnAxeprCnrc73b2",
  "key14": "2TUJSNC8pZQc6ZwkihZrzAbFHwcMigMrn9GSEve2iKN7vrSfBmFA9NacWrgTP9FWwH9v4Lh2FEzFKjLporJLzQz7",
  "key15": "sJhVEAiJWFNA7W4iSUXq4wPyfxNFRrM9WvdZqtAFKFZkwzauy3YKbnfKWy1H9Qq3mMSr62q3ZJARUNgphVV9Ro3",
  "key16": "5GdtyprpVP5viLE3wVW72FCrXXP3kby2h6NJH4kVFWm4BGJbRaiD2WT4oLLAYfN3cDENsciH81fVUNWBrtRgs8HF",
  "key17": "5ngC3XjEsDDsz7i6vb64CWCFoHxUrmoznrpymNLaesahwaGTA57oLyWS8NxDonxmjf953u84BrYBDLhgPtviJ2Nc",
  "key18": "4RZyzJt6dbuiJESQkhnU96SYqYgzDzEWWbC914wxSyCMFReVWJ6828YsmD1aguwkC4TBoacrweguqKtjJmtia3y1",
  "key19": "4msg1nTCxKAdkvBW9kpitiqUZQvDmXDDNY5quPh8iC2B9Vk8gM7hVmhK1NRPCjh24UGsmoSeMJvQiCssUyKhvLRk",
  "key20": "5tfu8mCDk1wqDJkvy3t4fkRDDJGP98yM3petQrgjryJYSGTS6t7Uja3TSjZjn4CnCH1Xqk4piA2PqKzssRSXUGAs",
  "key21": "7Z9Zjuv25RAYEpsL6fEGnc2uxxnohNQr79UTExjYMEw59vxzfN6nJ2mizkfP3aCE3fmmhWGgLCYdJLbVegHLdFU",
  "key22": "5sbvSGXszbLFkD5yNp8QA2E7EuGxkhNRMueaxdvnnSy7xPWDY9gL9ZpMAsjQDe4HFe2oQhDPotu1V52hFnditWoM",
  "key23": "iGcvbC6WXL47Y17WGo5kqNZe2uvtvGubbZi2duU3akQGN2adtuJuEDwZuBL6QUkcEZbHh4prYC1GPRoDmYrAWAd",
  "key24": "3tzuiSfLW498zrCN5DCmMUmFx6fCBwwEeiHgM13YXN7BUBCCdiyCjsVLwjF5Fx3LhqgdoZCZSvMr3iyT1BrmtezB",
  "key25": "4vV81VBAis8wzXXr271dGeSPWVJ6DevDbjwApiK4x9PvzGX1QCNkrAvH2mHozoMZAvcmA1ZwcjK62q2R3X6Y5kGX",
  "key26": "2iBXwkVCvtwqbXegojw6VdsSH4ZgkGSn5RmJKg8DYQo3kSeKvt9ALL6K1cepwgPQd4F5KgEyw3iWcfRKk2ToUDSo",
  "key27": "5N1Mzz736n5MtFtpNy7CZXCTqchCwSwwmbM9Dd5AJaqBTyJEJ3fhDv6o9xbozKujLkL96Bmm6kcMNTgDFoqeED6R",
  "key28": "vSyER2f9vuFrUtkQej9yFAgL377Y5hiaH88AwReBXYySwh8NAAUm6iwazsbW8v8dMAtqbLVoYGCHMGoiF7a72T7"
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
