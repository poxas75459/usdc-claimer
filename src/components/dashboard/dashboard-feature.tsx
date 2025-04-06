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
    "seviCAQb2AAps9zaLawPK3A8BNU5V8Y8Mx7rKzUykpSLXgPsNDytET4USKdcpFspkmvjGV33pirETJPapZNHLRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uPGH3jg2KhCNCzcWxEEQbs5pCdmpCqNKyLEfVp7Roy1CVAG2fRkTBYcdTiwytVfkPvjow9prr9D9p1RMpNXt7jj",
  "key1": "27bqkFtVdVRr1gCgdvSrtidV4QHRcHaFBaND7UKVPKmpm4SfsbQwwYQjJRaFnKtaE7PC7DBBAidjjeJzZicYjCiX",
  "key2": "421WDXRbTteFWq5SfSanXxns83ZLapoZtk3XSaMw9HxPvcKJntrN4EnqwNSaxMTR5NRBprfW4sT8zbLnp6c1JKTc",
  "key3": "3j2WFCzyDremEwYUNviPARfHv6Nqy8kZvimYteffQV9uqPaxGavntnQFCH1PzRSSyUKpeFYXxX2oE21TFtdqaFuj",
  "key4": "2goRLJ9pjKX8Vo2rDFMhSuZ1h4hakDx3Zz6KsmCUVk9SaCU9CBeSrjocUJWdgdQZamJvJPJMvVogKhgE9JNNceU2",
  "key5": "5ftGkxQH4jBZ8BPByeXyKbu8fDPotWuQxcQR9xr9Xgid1FeU6D5aeDjnUrwb9HdhYrBLm9gbUaBVUwnd31T9HxeR",
  "key6": "J9NUCsxicL2sdynFu899PTENqsiYotS5XynNUVEvcJqy6ZvwoyWB13D53sXz1tWTnkVMEMXgrm1ftQa7H4uBKvx",
  "key7": "3j2ncgUFQ92N9xRrhdVEcGXH3JZzDbwizUqGag39SiSDcE8wm2XvzWN2FZn7K5uF1NufRMAYJz8hLtvhxjiX2BTC",
  "key8": "cAJGLRiYPj8FtSAvD3F4Ap6FWhWetXavGAqK7ymHugsX1qRgzJyAbvv56QHnkTt1y3G4vu2uarLgLSxAHCf7kYL",
  "key9": "4VJYwa3SBbGT5jQsFGi4y6tbNuECBYp2c5aNDDyChFepmgQ1KDNkWxHbQKpW3WFT9CaQNtTCcmRHeqvmmh4CZJEc",
  "key10": "3b85GLdyTj3UpgAuy5gHo6xthDGqRQqSTFFye18JT7Mu3Z7wkBfxF6gfo9JMRMWTKnTqoxrCmT77AZuJjLqgwQrU",
  "key11": "URSJLGywY2jdn6R8r9anwZrTrizC8hcMKctFr2uXYJZhESHCw2Fu9TdmuRrG2D7UGhnpk8HtFq9Vo1DRHEgEYFG",
  "key12": "3PPUaPytUCaAmeysu7A5SuEgZ1Ba2QoDLwqFdkFS3Kuw6wNSeVNcNAfQUVjwazppwsKqrXCKhrdQqjWK6Q5yCKUG",
  "key13": "5LCUdNJNuthLxsSjqYz9J4X2f8PQAtxVcRZbyqsxWmsqpJYXtfsFWbNikkFA7trvj6JPirx1BMGmTULdjymQ4nJY",
  "key14": "3dkFbDsj6W7gSf7Mki4doy5SBW7CrNYmQUWYZnoUNm1gUNupPVoPjJyqEpMJtJCzDaZ9wtroC3C4gDG7JKqK1962",
  "key15": "52otnHkQm8BE8usCr1Pp7DGFo4QLYU8hc9mgiMZZaCzYJ2X16Sw3DRnUJKGuGeQVWyDgYQkdDBaM2hX44UNBa2Ke",
  "key16": "4YBq74PgwCA6bvfNY9y4sJcGvDuivqUrNDA9iqATY93tr1EbMZYXbkHZnMVXjpCdmxicg1DfLqJ9hDVNWowEqNnR",
  "key17": "29g6zV592rpQoNy6V6YYz7h83ZPgePCvcnkpdtPSJaKHC61azErGUpZiyXpH3tUm7dtyoXSHpM5Yeiy2bc9sxeeC",
  "key18": "3K72UBQeMCi81EVbhZ97w7qyX53HCa5mvbPEYfNrRASuBCZvXECE8Sa1L8WdUsbD4akYcGFVYFtrA4aLq3KHgqoT",
  "key19": "3Ya4qGbmvSA8Ggcx1xabPkQgMPVhqGmYx1Js8N7NXzMMQmQFMpZnUo3QaCr6u7TpKN9dGuAGsEp5QQichPPUNQCa",
  "key20": "43PwRqr9SX1rYZ1uK6XdcpXtBZDb2nfKhLSM28rcaSpNyfh4EV5wuz5KYHjdMzhhPFm26bMLPeuUyDtmZPcPa5kQ",
  "key21": "252p3ANVLAgpsSah7uidDTyzMfPUyuKYQubhsvjoMA3nMr5ppME737E4otJjApyWjXaKCde4RQ2XUJzVpSKKUkMx",
  "key22": "5khRqMppRTaXS1DXys19dZoEqQP4xTBt7zmtJqoz6hBwBvwETqSfWu9Hk3ZrzXtTE8jTCkP9ST1M67gr6cxofvpH",
  "key23": "3mwu9fm95y8ENMmx2kM8w4kqX94jH6LTD5tuAK4oWCvd6yuLXjmobxT2D45Cgz1WB2ainERQj9CVgmYmUh8d4mWX",
  "key24": "3MkPVDxBeFE1LBPyFtkvKUanhNqbcyfzaJBzFsPZ9tmaDQfgZimLVH25iNtNgLoeaf8yU6JNvRrP8VrkDWt8PQb9",
  "key25": "4KHkGFuT4Kagmd9wUL7UQEiSLjR7gHd4uN5SeSp3rmdBH1EbdYwvh9gi7gp9avqCWLAyBHGDHeAxkMVnYDTd8tmH",
  "key26": "5kGVeaRc5jWwg3xmw5ph4SUXmheiXEt1UDRXmzEDM79EuQeESrVTonQmX5MBXd6PwX7h3mt61Ew3T3BG6BvkpYeg",
  "key27": "5YDX8Q1sEcVAcLgZ2G6iHaUH7sVvUqsM6ADGf4cL48Q35G9ZiqWvJmA8sBb2Xjy8pkv1xXdx3REMZrac9AkFjs4n",
  "key28": "33XhAzeDiMTAgY2YC7seqR1R2wiR819gWTV1WEo5RMqkzzp4uCCRWhWWMubHNnJYbQ3GEXKNMF2w98jkUHRcEirs",
  "key29": "S2EeJgs6vns5VuztgivMjUN4RMsbLHo3LRZK8oSNTRNXAXVCJNZAXAJ8tygi1S7sFEKB6yXNobNoVqv9oxjSeD2",
  "key30": "3sHbV14Aztt2AzvVCc5MhnoiRVapin5MvRnQktyHpgPUqdEsjCdD63KWUfX8GkACZg57zQp4KQUZNUHQkG1yt3e5",
  "key31": "pJ6c1bQEx1CtzVRLhMdJL2644gKbRXQSZJ7y98Y6CJuqeREQaZpqVn8iPPsdkWmEaGgXt4ijBb7XQns4MxMhNRd",
  "key32": "4XptLT6LhKEfeGSt7sieR4vKu1S7HcmqN2nsHFemFPU6mcEU98SRbCQg9vbxrcm3TYTGRtXhm7ygDEjQceaqY5jx",
  "key33": "3CVUYX3STiYT9weSrJpU96bFoywPNZ9U6BaKQz6gHhmTjTWDGaM2cJTwu8NrLEts7UvHwhof1n2fwN7o6FhQJK58",
  "key34": "2REdRqEY6vgWWEcKARs4F7EB1Ga3DyBErh8tkk1qtKmsx9Zv7wNSasMPLHcLJTdAt3vUKfrnVYJr134MGRdrMWSd",
  "key35": "4BrLLUZYMt4SVv7wqfujFvaKLxtvxvrjSv3s4QKHZpU6AGYpn4MUS3aR2BhU69Fjk31jLpL3389jVhcKmK5Y2YwM",
  "key36": "5D9ZGYdqjfa7qEHU4dev72emQckRGUiCbG5kU75t4k8EJAochRxzrC7iW8bHEvxEaTM6s95YiS1LTryifX96c6bg",
  "key37": "5TA1PSsKB6dJxFLrC7WTuAeumnj1hUKjUwcKCpyUCDC1WNs4aPFCrarKPWzGiFfzvTD3soCHpBdMgfurK9qNrkQm",
  "key38": "2BBGwzbeWGN2SV79qgksaTZ74VDMKzuemgFReJ71VsDabRvkcVCaCovYMvqc8WyKNH2p5Hm24ixhTfAM7vde8FPF",
  "key39": "5xVgALmXmybayJjgvEtbBLAVhNPx62HLhqAstZwSaPdeWH4xULFftkgYT74HPUVhDjKyEUk6SZLKCVzLVJRusP4V",
  "key40": "4pdPmHfNQGC1gxxWdftXJqi4cvZYPFrkRvNXj6T4cVgr96Fr5nxR98ANENGkpBrxgYk8ABZqzqYjCgZb8tSF2Lxj",
  "key41": "3SzP7Whvwq4pQh9jFxC4gnL2dznTuWSL9s7dyxU4165MjA8h1hkEU8DWoaKb6xZSk18DcCZBgCHw2WVEvwiFRDVv",
  "key42": "4zywecpGfNKdMdkRyXcZN7QTyTNtWNAPEJNa7Z5Ncu3ybw1poaYWf9sftHLJNotAphEtmYGPpJFWN7DaXvkkg7YM",
  "key43": "2e1rqS4EArSMpjnaDg1B8fmhNTJYSq3gCNut91KRYaUzV9ppDEWc2EBZ39XqWfeEWt3t6hvgLj7U8BgrqmHN61Yr"
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
