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
    "4dQpWLShdDPUzafUAtfzWJ8vv49Nrv2eY86gsm4r3LX7SooM59HWwiaa3GTAX2skEThksPVgkfDaS7Xv7wvG6N4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cHdZGNh2hU3cqZwJWwgbncn17FMAPeL8r32qsUkh4MPWQ3R5UosoKkBX2ZkVNpzfBAQCMs2sURJszdE5EqDPEVh",
  "key1": "3bQtcYhy9Z6YgThTVQLzSz9yA8gX2M2R1pDiYv1ZMGBcjkN5CydP6dN8vCodsav66iNYyoGR8NsXwuDX67RrNsyR",
  "key2": "5WWczVELvNZbpjQmng3h2cVMhdZRo9yUbxsrSuz5rr7UreaEcvLLoNtqfJ4NWRK4ikZXn6jqEWUT4ja2EvCpPZM3",
  "key3": "3dpSCY36V1DRkfsxELRVGBecdoA1rE1iAjukwexURdGwaBwCrz4zVYQGxCekrDaefZV2ZAnpcmp4gp8Xgv5F9eYQ",
  "key4": "2J6ih8dNiTdZDDnHnEDsntr4mwDEWMZWJFtP5L11JRK8DFXNxxKKLLacuR93LHgcGVFoKLhKkN5y8PDd7dbbUSG5",
  "key5": "474MfhGFeb2MjcZCvChj9eetQBo3i3Dh2YkvwiZ7u4mevfLvMNUaTCRGfhxCBB1DmRs6tWVVLKa1YnuSiKRjwFXw",
  "key6": "3nKAsPnajFw4yjRsnHsbnDX1NokZonNq2B5YZ8NitRJMY4dJWGxEJABg35oBbpLUoiHo5757jSUFGpS8iiXGhjf8",
  "key7": "3MSPuyYVEx5UYJXm2BNR4i7vyyWSzusQCxvgvnjZQmaa8XWTPzBMf4QH19VJj5KSgSU8KKtWh922eTyq4tcjUBU5",
  "key8": "2xYjBQbLb7bitYJQ1Q8NkpZLVzF7GGTWmW2WUNKBzBELkwFP8iDDq3Qy9CgLn3ttx9KeZfAetcYJ3EUyyv3svUf8",
  "key9": "23EiVhw2oTJsMp5FJotUAX4cbNrXJxKKNrxBnUMzr4BaEygTNFjTMLSDJpYypY568KbicfAznkds91M6hbVPUScF",
  "key10": "5TiBWSYBguiKvYd36M7yfiT9AY8Bct1Afq8zr3Z9GHWjiDL6E8hnE5EnsXAjkmdDJep4raHgfK6MUhEbCvJuxPUX",
  "key11": "4SCSaBL5QZCPB4CjBX4dxTHhLsWincdZUqe4GXT9QqTjNca5Sgft9CJmzo1RgL6xFwaRTMZMVExyP77KNRmU2qWY",
  "key12": "AanPMv2si5wTJQaurqYpKo8TtQiC23SV3SXwqFJigujD8jwArpzDv9jhm7U8srSi4AfP44EirvGdGqLSBz8w7qR",
  "key13": "2BwzXP6X7YG8k9PVo8KpWThxxYbSbZYp8rPL42i9nAc1MpFPPVs9NKTH2s8Dmaq5aJigZ4Z2gPCGGXzVthrhCB4h",
  "key14": "4h75V9JKhXrx6hCKFhbFDvynsfAiqTBcgF1hssmWNoTpdYjZd5ndmfMEqwqt6SmgmvJvYzBvCJC9bpyLd7kMA7NF",
  "key15": "2T1ffY874RHP5KUfH9hhQe93sitnz6q2B6T36tJNV8q1GUeAxaSYfsMhdqQ6qAu5AEhUNsgnyVA1LWcfiuqvJZgT",
  "key16": "3UooRn3sXmvawPkDCYkFwzsjStjQTjdujTjvTfB2p1v4A1wgWVNF3Q2EVHUVoxqUpwnv121zuywKZJq8KoMsn5uF",
  "key17": "471rWm5wXtXF8exv9CP2RC3Xtoxnx2mdixgVPSbWBo5XpJdA2U9FSWanUp6FSnFzW7MEsw5kz8GLxaGHSFR6Ft7G",
  "key18": "2U3W1a6o86bA7eFfD5TDb5sLbYcStoPtGDBgCGm9MwTo6yiEeMbBKWpQ2y27gmFGPqmEnhBfDgwULxQqusDTvJ2C",
  "key19": "2iKKtoP18TiarUsUSbfADcmbmm9jJPMHX1z22oSc4eJ7x9ybGAFiLmEaSvZoMefENbUtKB48vpB66GuL6eZ5tXtE",
  "key20": "KYJJcb3s4WTNU5vbaMvpjcYvXftiLyp4ebCw79rE23Ak5RvqycYmdis1R1tKxjpGqaLQMGS53d4c23NtaHUnnq4",
  "key21": "3JYuSREHD8grzYSG8SZX9tXsPoggZPM9iDPcPndGWtL338Yz7N8QHP88yGZ1mqRU9is8AuRo3ZpDMEgfcdzwjxa3",
  "key22": "ZMPp5ZhfubRfDKSwsmarzo5Y1CiyvmDripstFTdrmpjNzUMG5Bzb2EAMFePVLpFc4eGKAzfNohiZ8p6X4ejwa3y",
  "key23": "4Cs8GRh9TRd5B6nqwSaPiFRkWyGWxA1Jca8gKjtHnUZa3WELarbLecKZ6sj3nwyFcGfxKZf5RQDGMK7tA4jtnJqb",
  "key24": "34Z9fbtPJvdgBARK745xchamq2HMrafPPmiQkMCiMVtZqTPmUFGQvys8vbp4yJpV9kqCuHqA3U9hFGZzGk5naVgu",
  "key25": "5h9kq8DWUQXuRfnPHJhuMukmR8M6XN5twjTQoM6ghndbTxC6KvGwQaUDYfQBohzPhgKRv9fHn5Xtemhtnb1A8cUM",
  "key26": "52QH4mfpoNWYkpLd1RPbxVLYtaYs7H1CtfTqe3mPHfpuaoyCrZCw4VpSTZYxdXy2QrmwrY2FrmhkfUu7K3gncFrZ"
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
