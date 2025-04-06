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
    "4STScb5bUUT4BJVtCR8CATnAkUrUWYPDWmzt8fmEWa5VqVu7n7appN8bospUvaVMRHTbTAMFfxv4SEuJXt8U4QdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28rnuuCa33EYfseM9cgrL7HtwBEA6KGuFdt5GjqCnTPZr5TgQVDvE2bhVp6hNBdC9CdG8YsmWP4Rz3EJc9hH6TcE",
  "key1": "pgsjQoGfXjVMVaVTKMyYSCnw6UENfLbG98SUhsU2XRFghhkGPWskVBjoAqz6qNcfJGwAdzW6gU4Vr9V4BuBvZHt",
  "key2": "4udoUJ3Yt1kfoiPBBsQEt63hbJnAaY9JWSXX7rtKASApqXiWsaqxzwrRRid9qodeRsA4Ati41EjQxzNr23ME6gvm",
  "key3": "5DFwakwUiqDhniqrdpWTGB4DDvRWLnQaJc1j4k6u1DhFXDXPce4Qw4iKJM7NcJyyrtryiU3c7T3Kt6qgZ52RUAso",
  "key4": "2kA9cGY89jyMx2AFYdijMH2WYXtxyUXPcHFCXThkc7GLMPPzoY9z4fBi2GmGYD4QG51Zpabp8uFirQwE88ZcfaqN",
  "key5": "4e31YddLTRLzjMt3p9rXDPWPpM1T8gT1rhCs7XtpDFDyToL9XaAJmXyxocFEqqN8JgQ4jeHbxS2tYrjZpJMSSxd8",
  "key6": "48XP442tkKTpLFXzLEBKXH38NLNA66ZzLWfb1rW2rCBh3b95a93zGtHkT6ASWM62WV7etTQYwFFJGpCbYsDEVCpw",
  "key7": "Y9jniXbuB5eVPBRcRQz8HggLuJEqmkMeiKMc99U3HZaYptTB9aX5ZLioh8H1NDLxSQwKTwRRC7UnHqAaiaunx77",
  "key8": "enbHF8tvpBVewP1C365e7MQ6ZC7f7hjQvA8v1vrewUtxkt2eQq1Z5Hsg4wvux4Tpg4vNuZqM5DxCAuwiz2GDccC",
  "key9": "2BvsEkVSXrpc1tx69TXoTbvAEnSZMSqQvN5E9pEMrjfTwpW2ndvf8RBvJGfY1fXLJ5iJZFGLnTWVMDqTe9co6U1F",
  "key10": "2siDHczLDLyNHf6WJt57tpEXmjp3GDxoQttDavL8w5jpHqXDjxaocsKKTRpJzeCWaHi2Ywu71m4RdvTAZ5wZcnF4",
  "key11": "597SGFHkjYY9hRq2QGEGd7gFCD1vSNHiJR2tsfUsxwPnWoe38xbkpxuWnSkbiqMKj4WWrKZvJCRcziDNnPgT1YFo",
  "key12": "5pjGYafxDUcweuFHQS2haMEvpH9sahKj49u2ENz5umr7qs6Aw5mo9Ce12i7fkZ5viuSbfsDiyvdSJPTBhCkSf4Le",
  "key13": "3vr3k8CRakTGsvJcrdzT8wo1QYS7sc2jJrDYrBH2XBTZP33gYqCxmVnv4XDrgmSBTtAtGGjamZ9AQF4AgZd6NJxv",
  "key14": "3PwVpC9shJfgBuQkg6iN2JZe8dA9vGP3yPi4itcwWcYV1PW53zyDasfo6jNC7BmEjNSjKPZNMzQF1LBJyiBD3q3e",
  "key15": "4g1RSqZrsgzRfEHwAqkckMVeHLK63rdsNkyYJzo5yKuUptmMnsBMmhpjnG9RboVqJ1BYFFg5oaX3mzh4cf62mLkc",
  "key16": "Nqcy8B7VLhrgEyJbBf16vRCfN7rjTq59rv1J2FrsX34jxTftRtuA4QgzANjgJT8zCD6QX8PG6MM9GadWdGnew5b",
  "key17": "47MgrhJ1WW6a1MdNYw6VHguc7fsEcTTETiMXZ2AbT2Yz3UZGZfWXATXsMuh6WDczx357FVEBbFs3z96WwJAMe6ez",
  "key18": "4r9t3VLUdWhtz3VhwF8nFQoLgek8yqKW4DcUDeYqDkQUuAp6GD2ZGjcaCMrV2f5J8n3DTU3gcoqqvMvWzdJ83sdT",
  "key19": "2rsJ4fkpWfvyZRJqz8CbPv55qHib5U62yTjoQbf7cZeUmjQMQLaMfHCrw61FDjKSno9UPCtrFiFuGFWNTMhUfdvA",
  "key20": "2hS4uGUowugkiPwHJ9EvQRkLnYKHSbX57nye1WhckY6Wakt5St4wVmySYCycFyWYaLMWrdt3e6iFT4XZ2jmh4DYV",
  "key21": "2qyHA1YzYArSC2H8DxbSnoSX1KkPmtRJGxECcabvm8YreU4kQvpDZnqEJm6yHKfrknkMnRAgYkf8zUdFsXmEdMEU",
  "key22": "5kWrxbvV9uUkmyZcqqJZKEgkfN68f7HxVKCmMeN1Uchnv53kxCh3DZMQHmn6k6ymBymKkEREdU3AN6Bo3dRUz319",
  "key23": "3KxHBAxf23cVjw1fXJGNyBoqoFfwcpbmNR6Ug8FDrpdiP8kCDwCmhuWqxAT89MLKnLAL4obzor2hsbWaAYsjf4EM",
  "key24": "5bvbhncLzcjC2TZzZUQYwG9RymKwmcUQoYt9V29PvEEUjvd6EtbCkzJ7eEkoftm3RuSFgZMTW1s1UYAvLRR6CaEx"
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
