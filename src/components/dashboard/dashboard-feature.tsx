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
    "9sNKVoEShTLSdjJ49HX2h8praiRefUNCBqNt2iXHjTqGKNZ2xvAdkNcVYAc9tskjDqjeDFmHCsS36j9wNLY5dGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJrgXth5Dy7f9EpVdRXequqaMeRTfwRjPfAx7EDkp2vZp26TbCWBkLG9qt13x4T9rmM8hm134Ys4V7KbTAb5B33",
  "key1": "5eg9SatcmCtjjyfcLULCcUrNpWXKEPM4A6aSx29j29GKwHVxwkSSVHDEiS8cMhrANaWedWw4Ve9u8LDVasvhtbx3",
  "key2": "5hWddBwUTmMtJxshpsNTA7N9N7QPnzz81HPfuRAfmFC8m8iLdRjjezGsnvsmagKfvs7haiLMy2NKPz1ULWCEScjw",
  "key3": "3gyV36avmiVCiBABS2ezdWzWZ7pjMxmRLs8sufSXJ2tW9yM6uRthw2btEFNSETnEiHVDurbdUUptaMFfPBAPm4Ld",
  "key4": "38rJidY7JyBVch3Ax5Tqxhxz8GyyC5RYayQqxzD16gv2DR1coNfUFwAjmy5yiFxsBswhow4ZhiEzp8ZZa6m7oc8c",
  "key5": "2zjDtfH5TvcKsgbWrLPyRrDRzg6Rg9Kp6bz2LataxZQnFYSuVi55f7mbr3Brt1879vVcarKEyPEAzTrteaKmiVbD",
  "key6": "2JXrAYaRLaXWpYQBXAmXQAARFdfKyopfJ3n1YZRUtqvr16iSERz2HuG3gAhUYaS2fUyhPw4LXZqFs7sEvq7NraTV",
  "key7": "ym6P2hS21KcNsb5ZoF82vhfdfmThzX7CNhZETXPVuFtYqCBnERtv2U1kGQj2fxJfEubVdZyoR49DKri2yXLadxd",
  "key8": "5oHupp3NtAFgjB1HfHpskh6KHCSYEWP7jeN5fUYrQqDs33qcCn8mvtvZGi4viYmvpSHprTSkYhr3dcEuU4PjxJf5",
  "key9": "3Z5mFL2xTi4xznWuupqPMs1czX1tmnXS6JuW97nUohtwePa7XaRoMSF2mGBd8JVfq1KucWGn3VvwLzjCZDT1n4y4",
  "key10": "4sdTWmz7DcHRoFLbpsWHB5m6QXkYpnKwA1jSZMbqw37F7GfXUCnVPq5xbZfZjmXPUf6mpCxSdsEeYzgDPAEan73s",
  "key11": "2fL718Z8zrnDtAiuHq2iyyDUAuDsupP4f73CkfGzNkhUKNHyn4JfKXEddGuRwmNWQFzDRE2sCuDydrzG7Xkr2kQk",
  "key12": "45ocpHB1zGdx1bLjzxVJbRESLUVV8H15fNAtCZgqDxE9KZv38BJKUw7wiPNY6mfkmDBzcxfDRoXJh6HxzMGy8rH7",
  "key13": "mmc561wtwFo9VyWGptES1keZ3SGCWVRBwxniaVAREtAGzh5H4cUhMtH1vNovN2wQzYv9985HkMzwyjFTuA19M4k",
  "key14": "5c9mxZVHEj9G4j9C2pZw1HtQks6uwzdqJTDzArSXWv7Q6vidKfnFfP13dq2scyyfL29SfYNvLtVo6HAWGofrCfYh",
  "key15": "5VvJWAcRrxggzbDmsAjxzgP16yALRsa7FnTCh6KHTCgWL7LSPiQ1CTYLo5Kt3poJ4uamz2iWoxHTRgAv3rWBh32x",
  "key16": "32apR3gQuygwCZbnYtxRpqUCNfJWAA3EVZvJCbHT23neTdk4uzaDoPgkWDfUUVunqJ5dJsFNxc42dXSrv45Uj6YB",
  "key17": "3jmxDTJNA1V2buMXRK9WJY6rFTavDCf5bof1hXmuga6QaAjYj7wUA5cbN3qGodp3m9dJgeAKLKzegSgG2VwyDEVZ",
  "key18": "5123Ag4Qt68yzcG4Yo2dEYnVomDYXXNbLHZAm57Tc5kKWMPgA1p89saHWGLX96NaKGLFDWhhXwEaaxbNVm2wHh25",
  "key19": "5VsVYba9D3GQvQCfoYiiVwM14eFd7GCY2LFZJpdWvnTW7YndYotM3qJvDB1LQmiMPio3yL8qoZdjWPdtJMyDfFCu",
  "key20": "27vES1VrRWHcDNEcLnCPMp83CzzKsoyt6MFrGWfX9ncqhKk9n3zGY52dGFvXgui67sPgNS2YvsvPnzYiLSQChfxj",
  "key21": "49VAjuFwA5Xw77frdbcG8S8pJdzMh89foFZ7CeJrbZk2bmpKxHVswdcSeyVjBckiw5SLP7ptmfHuYXFW1qGR3cSb",
  "key22": "3EJAd4f313KeuQVHqGVmygLhidJJwAb6yj1KPba1euJwAmW3f96fBwm7E3kzNEvE2kwh5YpDi3ARbC91YyXL3iZa",
  "key23": "3ft1vpMVCkUmxQPsnfRDayrFsi9LaUC1m1JnN8vSssTN5BRUQpfUYwKvfPXX2ZwCaYp587MMzciEV4LrQ8bUFNv1",
  "key24": "2GthvF25mRAQmW7bugnmfQhmMwZvr5DuHVbPfCvCvemTz2CkmGiSPNFMWYTZaf7pXKyQYep2c7ztURkD7kKYhoTz",
  "key25": "5oQuJ4ghF3DoaHxmjK4VTzKFaBGm1jw1d6pvuss2BvJoZDjZ6Szc3erd88DCVhNv3rxYxWAy2RqcQWQf6Z6YWQAT",
  "key26": "4FUbNLyNS713kNX6c6KMWRxkXTYPMaku3YCoPf4qWfrVvFTFbuXA3UKSkQpzPkg1tX2yWvecU15dTVjpxnKHsywz",
  "key27": "5suYXL1AKDaroNqZ73w5WsXj9xdsApf8n1xyszYCoeZcv1xYA7aA1r8oS3kAJys24EjYcXWLy3ayWyPVRg7MCkPH"
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
