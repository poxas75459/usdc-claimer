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
    "2iWhzHk6AntJCNUYVpHfGZbPN1zNRsZSMnajN5VSAqVA9ZZQJAj7vm8f8aaTuEPX9g4azPYKfbp69XWGYFYCpkJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dHN4CG1YY4aQZ8wFhysdCJ5Nx9nXbGPQkaWZ5d4TCRNYzYp4hs6ZA4RLy2zKq1psurm4HXYchMLmqxxc1naXchg",
  "key1": "49zx9av1HBPLhbJ7RHyhJ26aeUL16Lci1CkmYMjusubVXhZTD9DgKCc2TY2Dc3YfdTAYAUzRuWfCj9Km283w7W5q",
  "key2": "5Mj8JF2Sn44e8xZEXh8GyD2iknvXpQYWpg4UnGCbpjSsgVWZ2YEbjNphzdCFgMVPjEEkiUaqMZxbcKh9gcCC2Gyg",
  "key3": "39ACtkKwQYACUew4zdKK4dt9DpTDhdHGq4qF5afJcMNAHv5g5VotPFgc1vTXpM2rxJDh3eaPs8wtGRbJKjUJFzng",
  "key4": "4fWQ6r1TLH2E4HJsgwqPMndysjBEJ9mDtxP95hTAbo8BD6EVMiERSpe4AYiLpgTxzBN88bmJUKfQFMBzLFjMygxo",
  "key5": "yZX1aSapQoo9NBfRJXGWicEMRRabMnK4zenm1qDBvQpSFp7FeqYiunxZUyLrR9HDtodUsNn6on5p8WzWJRBV8dR",
  "key6": "4pxptkXwK9KTDf2oBnJH5PHmF76uTb8UJjNCzQXQrxFtiRcAp8pvRFmhKB4gPQb3DV9rgLyDoJWaHu39VNVyoJWg",
  "key7": "5GZ67ozChy1z6UsY51mbTXo6vzAVig5kDfVb2S6krT4SdGyxbW5kEQffpvg65DDZJsPBt4fWt8h592mUeoPDHNWj",
  "key8": "29cNT71Fp7pxakLrF4ntx7crir4LKCaBno2ZYxdkj5SXmGg9BjenpkJzzvPwFCcku6LP5hWL9aJfVUUMmbsNqrYW",
  "key9": "4ukY5rgCMttExEKQ4VRJPqJZvWVtdYpvQpf36avYi4a84HaVbr6kDtyff7kzt1z2T8WwzDrpataJYgQogDxpQw4S",
  "key10": "5Y5P7a1MKrJZ98cBibYPbXozUWHMKXEV8SoSRitPet6LVzVKpvpBxY7hKmWH2G2Y3frQT1WJ9hhn8Sw5xcTxevLq",
  "key11": "2wCd2BDKZJrFrzFVFyToT3NGT7FZCruMDTS7UL4FWcJweQtFzdZUTDjKeVSgRRpSJDnn3LaRGbt1U8Lbt4jmSsht",
  "key12": "3dovzBf2hF4PfQCZA1JHsVRVpwBWX6XjiM9ZZSfVwvyUhAPqZErhEFnU6RvaDb3DK2vv8A5Pgg3HyWfbYXceTwhW",
  "key13": "TuU6QS5nFgRJpuNkCHyL3FSoK784gR1aUwBigHoBNpeFwZ1P4UGyNVu12DvdMDxiboZZ2XKJxSBKm7RY8pw52z8",
  "key14": "v1sPEFiWZfNcerPtR96pPeu11tRJ667yNfwAaUAdQXq2jnshhFR4vhieSFSV3En6ygmbnJuQT8FruoZN72D8YoW",
  "key15": "5wBJXmSUz1eVUaSPUt8bEBS9EcUWWyPuMhGhhuPvd8faC82hm9bT4AqFbwMjJaLvdWDx8BedwFXby3uuw78QAp6n",
  "key16": "3J3urzj4rhnxDJhgyJVDHVQ8AXrwUZzW6Nw7VFeBQdg8Mn8VStzcsLnH4CTcWH3kYSRevDy2Nu56YqjwiL9ThnDh",
  "key17": "4sndY7mCWaNgQo2GraQBUkJNLHNuLLNYq1eYTzRGrxnXrNMtyqPHE43vzHE11RzsaUuy6absVguZCdUDKNcSraGm",
  "key18": "2X5uByGWjRUEkphFMzrDs96EAE2WA9GF2NfgWRm7kwVNwqQHydXB6fuqSkJJkQqnf8St3saadcBNr2HSt8v1daRv",
  "key19": "TtifSN7mQFe1TViqrfnaWj7F5251qoPQgBXyZspA9k8CUvMf8eKR8DVyxNj6YaQBeq9mciALYj7gYxDVh5Tz4Bw",
  "key20": "zc8tewisr3zcWwQwGBLvXuQhRCuSeEHpE665LfTXXkcS2rzLvTFKF3QzaPLa9X83FyvG2fRnfsnGan7ZVsKAVa5",
  "key21": "3EakZYqhWUts4vpigUceV8u6pTaxvvmcGi6fzKZhWL49Be3ZYJm3Epsqv2KEkGeja7UojjugZatyZnM4i7iCw52L",
  "key22": "4VbRX2gGhDzhi6GhY4UhSBr4MapaRz2U3zkonjX8PfaGiLhRQ6hijuV5TLCoSHM95tgNPgRP8MjjfvmgR8eEY7b",
  "key23": "4Cb8X2JmPjTZc5rMVrjzdzYyrFkP7yaZze21742yQ37wkdXBVLEYkpWKZrVUAYYRnzXSSYXo2Wc4cu3YR82eYNcF",
  "key24": "uUhQhN9x4zQ1Djjwsir4YJSpRsdj3kZdnLDUEZDauM7w5735abrqCTPf24yCfkFb322TPyCnchpZrBisZjYN1s2",
  "key25": "3gtZNUDkbjKR1fieBEpVexbzYnUaJa4WUopbLAfc1ZdPkSaWWWG5RjsJBCjFA16JJKmJ2VKYzpHzijmYkhYK1PWZ",
  "key26": "53WxJfgNY7seDbrn2kyawDMPn6MvpYgwwQP7VLjHCHugkXuTaqZSYTmnWBtbnxFod4aT5F32ax9JAz1VfZkfPmej",
  "key27": "5HHcuQ9JbMd8zPWhEDNhXcgcDKHVZYXZATEgf7tfcNZbAvKLTukAoxeyZ2x4kZi8adzcCF1ErvukxhjNDcjdkQrw",
  "key28": "5tRCE2Cs6LFd1e7mhWKu5NmKWd35dG8efNhv4BcLNH1UEfr6gPNkdm1Rfri2MnwMME3NZCwFJeWv2udjiog7kRhG",
  "key29": "37fz6JcEcnp97gqj91vCjNvPJaDEGihRuXu9dphcGUzRR1Fjag39nDcCHAy86kJMdCScm3HmN2reJG3Wiuwff4CV",
  "key30": "5DVzTH4fCwtMQLndJYm9mkWSW4jYM58ZLMdadt3qdFBb9D6tGNTPfUGgDPwXTiZZPZjVSjQUqfzzKrVuJtmPajKs"
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
