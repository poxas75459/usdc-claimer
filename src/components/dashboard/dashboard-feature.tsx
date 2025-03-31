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
    "3EJkFceo1ZXhkmPycPMi2aAs65kgwPeadfWLzb2KFeQtgC9auinjEg5qCJcbg6Z4vbLJQPif7DquFU2iqbRhMDXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QxMb94zUe6GhZmfB88cR2UabACB5ZqsikkwW58CWnbFpH8WVPNrgVPQTMdgDvKVoGMJF2DBczE7LdcCiWh8sshF",
  "key1": "2icKDrQuJEsTkxzZyZ3B5M7tXxFYXmLgsCxqXqRyPAMAEiFDhh5ErCpirwqeSdrhKRRtx15TiA55icqi2HpgZ76c",
  "key2": "66iuwpe6tAuHLSrpAcKTiAEpmskxEBih4eg7tDYD2VLfZSuQVCpL3mBEWnErHoLqF4XHvwRN81cTdptacLGkgRdX",
  "key3": "2wJwWrhXM3N92bi3fwGH7PFdyw34caouVJbxDqWpNJTyawTuPh8TFPb57749sifoBVnz6mHjcpKY2V6zgsFx29AR",
  "key4": "4C6KEnNNaCEXnpYZUzDdJsYtvAJqF1drFxZ2a2avUshHQCLVDhJX36qLpJ8arTxLEfzUCGkkGumjkqF11YsweePm",
  "key5": "3vrukto4gj8mtKbhtfEnvozc8noCxtExcA4eCfsNzp7NsDSz4KWdfcdhCbK4WzQCfXH2uW1agpaRKmvzfHkvGTMq",
  "key6": "4S3p3zcALD781YR3wSTV7FGxzzCKA5CA52JaAtH4zWqzQY7QLbKKdYseFi9W73yqLktaj5KX48zdQY8sYcLFFYWu",
  "key7": "4jTfPGeBXTgnoTwGMZgJrtvhGa6EzgmKdUksUUudRf7NsGhJMW5vp7KkWVjzqsvnKoTUo2K2PSFNXwL56FNxXgGX",
  "key8": "5MzeMdM3wTtzD9s4XVAER3uctPCbHXGpKxgwgQhd566ux5SETViqfZEQfdSk665FF8xuphG3BLeZKHqHVu6zzug3",
  "key9": "3XbfhLRFtLXF5NyHtmsVTYUF8MXN8v4PHBVoLnghE8QmqGmsDJj7V9yDfDdBWu936i6kNLT9yxhe1MDCymdh1K2w",
  "key10": "3TxwD17AUNb6EXaB9sHz74ipnLse8r6XnTgVUi3n2SczPzGjgriz5yCY6cnwoJAF27FMgNfz1z22reWf2KjrTFBk",
  "key11": "3ANykKgocSqrzVxPidzAV27BEy7tdQPetpvdvnnswmZ7Uso27g96YaDyLqENe9mFwtGkNS51LKYEdKKQLaJN1svM",
  "key12": "541NfkZaCbrHLvGizpEtDbvaG2uoMx4XNNgvLtB3Dte1229y8oYV6bVv4f4xqDTYQzRKQ2L43u6zDFgLbTp59jaN",
  "key13": "3EFMKy1bAD4uGBsjL7UEJK7f2cG1dPDvEVTrsZtJmgQHVMTRqV7ivMyhjkHZkUBDkqHV9mCf6KEEaD8ENtcekRSA",
  "key14": "5ivNc5vMqiyet5EQZEidCuboCpJrFNZr9SWqh3eTXgzeSSx7CEuriZH9i7LZxuwkg9cwuaGbdbK4YLPf7SrWuLje",
  "key15": "G3Rk7jKG9drdtkwAwqvM7kDa54Haz1gRxPQaMnyM4TC4KB8aCzsW3CQHNiCc8Qg1UXne3aQx7AwoMRVmiFaEBTw",
  "key16": "5pqPWsFw84p8KDZQqrDimdSgpnSfKJQqyaReLAu85nShzVZAKpiyXPo5LNTmDT83g9zgwaodHnMB48LqcqHQEbqg",
  "key17": "2YbZuM4UXUXxCtRpPR2g5D5haTmpCrov388sVVEJgN9aJor6FLBSb2ZtNgP3Zw6sdxEstrTAiP6TYAcTJYaV7eeT",
  "key18": "AeJ1XAfn8dskQX7G5iQwewMWMAHnoDHtGynMR6KuiSRhYbh8nohWe3pVtnqzWiSvSNwmwgdBFGYBM4FZLy5xFMN",
  "key19": "3nmHncX5PmQg4g2bgQiqn741o4YvLZ6HLTqpi2rR86WGKx5KQJCZAxZPXKEXaaCBMM8JsZwWZFADk1K9TdApTM3Z",
  "key20": "3DU5bbP6W6TBr8dZ6NKsC3Zt2bqKTNsEXRZ9CVMt3D5k8jpajVeWNjbJfLALWfL8LV5BmMPDwC3EF4VBQjRYcWqX",
  "key21": "2KpRbqggGrvYaUEfsKQmhHV7vADk2usdf9M2bBveHKd1FNYt9oypiKq4JaR9vaZF9HWAekMP3khvXFfVnSZGLdQT",
  "key22": "3az8cpVzAmUsRZV6i8CECj8oimpkaAu2HzQVXnnykQRvhvtsk63aDwngdKc3DbenAjYakRncMaDTkYighppR7vyU",
  "key23": "39xWFpBtMiufMsfCqCGU8gqKXfPd6zcsEk5dvRsKxoSjM35srQqejBhnNYZAzUZDSBb2k87nE6Rc1ptzZrtgbzB7",
  "key24": "3dEBzgzz9Un4mdwgjk5q9Hswd5HFMNCWDBKQWZNtgvUpQJ7G6GM5m8b528aP5JDwExnNUiUCcrY7wdPAxdW9hTM9"
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
