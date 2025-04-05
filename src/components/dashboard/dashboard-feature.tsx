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
    "3p4XHG5NRaLp36NiDXtwH7iS47jvcKrbXZTncocy4nZ9LuN3cMDBBDd3N3DT4jnSxqbHcWuLsPcQLWTMzQWRg5Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWET4zkJVbZ7ehgutDWis1K841YjcnnC7zZvvNojchUmDpYSC5FGnGfeBJrsNdGDgHRixbTj4MkDNY5gH1DB1CE",
  "key1": "ijKctTzCMEf2967PXsZjehBXyiARvq5KnaA3vDtpp3oMuqFiYwbfs6kFfsu7SNVJm6CJhF1V6dJ4DafgGGbfx8J",
  "key2": "5pG6ix1DuYmQdGBpVJzKDu7DADDfH8ytDQ51GVFi9sJMLvteCBt6uTWj8Md4wyvmugt2hc9sdgmrppEymJoHVM9h",
  "key3": "to2p6JNQWrvBGkUonT9dmKv9bFQnxhFBMyhkbMgouTNyGpWzVRs6V6Vb9X5p9Z6usRxUn7fJQCfJB3NaM3rket7",
  "key4": "NqWkq2XHzn56yByWzZmenKiBE5ZBor7CKLZmp3XQ6aUiZPzS3iNpzrZnB2uiXAb2GYKjcV6tFYdNrxZWUsiJp6W",
  "key5": "3pLoekym9qkuwj1vNjs7AXFsE6AjKn4GWZ2CeDCYmbEDsjSkrhNNqNdFJ1tFHTQq1BmXtfPSaqpHhRVpJjY8uQmp",
  "key6": "vwbTUXNd4cW53boaMaoWySSf11iDRThRgvg2jmPpj9xX8aRK2nQQDbhLsmREbJEcTvc8EX1pnQSAtQmy3yKdpbg",
  "key7": "3xK34yN99bW4vY16ogmVFLZvh9Boub3vgnbdn1vaSvKEnknmGwfwB9WyxWDPo3J9AtducPyEDTW7AsD1quVtw2CM",
  "key8": "6QPo1gwyqoKicguEhX6DuxsRyXfNRGUucGSSKAtZdkvgZc3bvNFMxtZXnsVXvdv8sHmXgb4Fv8wfRSxRAUwYTYJ",
  "key9": "43u3Lht7BFq2rdox99ukCmTCTenC8u65CWbtAmpNHKrzDL1hmL2yumSEFz4PCVjKGSm5VYTzxz1UES3PbkfjkUrC",
  "key10": "5bWK6etYUprynqvKsZR3So4A2zYFCCF6KA3XoukpEDYT81aEaVxCnJxWdVxAwBV4hCCSPCHbBYL2ALDfG7y8DhNF",
  "key11": "3oKdVtza7tKq38z4X5rhVpzCJGw3vmF63UDh6PUosom4VJQzSQzV1st3AcJSAEqWDzqB8wV87jtowsuyafejFFyA",
  "key12": "2g77AD4htF95SXHoJuNQDqmYiLQWHJyt8nBkAcNPg3BhSepDxgoEEt4qv8CMndw8oszhpsq6kBPASj2U7xA4C315",
  "key13": "2A5WSsRg21ZFsVSLXtGbsrKGncfu3mqC5PouHiTTjpUxEJWkg8urwP7k36Konk9wt494Rop4oZDfQLCWZJ9irsK8",
  "key14": "2bRHN5zFFtaMq59Xf85eSmnnK5ZdWcCWN1A4ujvv1xuDtSSegPLMHC8qm8eJftuefdLdrkPKr2KrLC4JKuUycwT",
  "key15": "53bEBcz8ttUmsjZJaw97BeEnkmfr2V1MqJKf2zCbJJceNdSv3Fb9XTsN5kkaEqopD22QhrH27g9mEPViDGPAgkjb",
  "key16": "kcTxjdquDiCXQ2MDqQfNCrSukTKafTe8hV3XQCrdgWzwLcP1dg81iSPpqqP5oeKRJSzbpxGqvxpoo429LTsAYe8",
  "key17": "7F2dD4bhbgEvz6CE3yoXstT5tYumHezWaxvE87pFZWhtT1Scpxe67Nrh6tbN1hvD2EcLF84wQAkmTCDm9sQYk8H",
  "key18": "5mMt7qGz6cgj1mRnfQZkLYR3vfmeMANGRw3uW6fJL8T95RPKZatvXjSEDUiwaEZ58De6VktavUtPG4exUdgRGKeG",
  "key19": "2aWzK6MoxKH3bVDEfJ73ZGjh74piJAqaUbDvuTShqvwx1hgj3JjDC5ewdn2ZvGyyptRub8YVtb4JcfpCaa9ntxJr",
  "key20": "3yAotQPoFBr5C1SkWUMtLnXbn3ph3wLtkLLsVqfhp6zmUUm4ptkeSMXAnnG9DhWSHR1Tk28SzYo9v8XU25bQvkXg",
  "key21": "3dRby1W1pfvHcNAbiay8CdVKhABjkfsTzVqNgtUCTAcus4Sg9RUwxgWgwSYX62AWJcJXLHeaYoLZQCimJbWNsvxG",
  "key22": "3SnNRdVoDV3bWGhtg7vxGimZTu7ghnGUezLyeYdyz3eQzTppvKuoZB2bAsbFwsrgvPfVaYYzpX3QEtANHzV6qeLN",
  "key23": "25St5JWqbo6StxhYZatgbeNz7zJsAabDDVsETi4hJdFRP2BjN8DwZxmvkm6JfW4dJH5iWe1VcSEpiY1yzRLeeSyM",
  "key24": "44RNDT3wqwkUPqxveF8Madf5VzYnjMUdht9X9a2CadCRVsExBZhAtnyiVZrAwcxUDxhrgzSNgcXWCemztWHB5Z7U",
  "key25": "tGWUMYFmATbWEPzEwLdKyRh5hcT9tx8DNEPNSYJQJAF4SKBAkDzbCEkmD9n1Vr1g7n4zvE4DrhGVefEbbkJa38r",
  "key26": "3wngsKzmETqXhQEVm46R4sXyJjLo9KGpgLNPiU4HaYNEUxUhk29CMRm2nRKzZkQnPdvzQJeZ7GRBA7fw736e1DCs",
  "key27": "4FtSYpqRTbJSRVx3reY3g3rvAkxpiZZN9g4vRSmCMnpnqAiHMBzyt8gocCWE94zkJeWq9Fue6WV1VADwxRgK587b",
  "key28": "4tbJXkxaHGZrLRwboHK5QvMuM9WR4PbM32zbmWFN3yESQr4NYDhvpGER98Aa86pW1Pb3k9LdzcjWyM8R88vG6gds"
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
