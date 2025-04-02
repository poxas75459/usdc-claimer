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
    "y8MUYTwn2thTeYbUThDrPrv4vgLtUhq1sMfCHxLJEXizMvA6toKAg8MjKpyhRoDnpza8g9Bozn1FEWJ7YLkWNeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32vvFnfxbtWJ4k4P3K2W55nh48UY4HqvmU3hXc71Hsh1QDBkgvPYxcEcT8rzDq7vETuXGVCGYY9WtjFJ8UmARGm4",
  "key1": "4TuifkeYoYeRBtB9eaKJVpHo6uA8M4tJjgQtXovbuFyVGrg77curBRcLvwieYNisPK7a8MrBppqXPvyCM6XdajUv",
  "key2": "NsYh3J658adqcVnhk3ckGQwsWkVi84L78bWNYsoQUNXtmPQHdV5gSZ9W5zggsFcMm9feQKURyLDGQGdKdW5J3nf",
  "key3": "3P586V3Y6rDgi2BGMFd74z1goTHZW3mfkmxcckMu8UiG1vy2fhJu9K5jBWpSmPXyzqs8vrSRj8VyreNBFZGGubxt",
  "key4": "3ViALQL1FNcmNApL5t9tuMj4PY3xD4wJ8t3f8uBfNKu7s5d7Stnp3AC9R5qvp548V4jbfoUZpSE6jSELTuN9gy48",
  "key5": "4pHC3u4EjBNKqpcxNWfEG5Cbkp7KpDbwkkCicw7XysCyDxUtYtpiiSNe7KA2vEdak3bam86BNLySnEMKQUvi5fTu",
  "key6": "3zBXPYu3nMuTVYKnoQfrmcXMVYfimT9P3D4KMg8MG5DHjKx4KKK7S6sSSKBtwyi4r9ubo5ZqXUsntGK4WH4wZTAD",
  "key7": "rkiofJ9uceQ2bRYezCdYsXLyLUcWh3zS56JTGwa1hcQFCj6EgyEkFUSZNpK4DbE68KGQxwynySJ5oFNZfpj8ypm",
  "key8": "5jz42NbfPYaro4wzueffBGRXDUMFEtWurQcsE34PotEaLAGLT6BWhAoDwvBseshYmhAnG9B1FB4diwSDamFTW17r",
  "key9": "3rfTmMTdyiSvJMHV1JK1S3GVDmhSawVpMmnDdpNBsMTCCEfJPngc14zQULyUeoT4ASXGobq5cGUFXRaw7VcgZoZy",
  "key10": "2mkfTmRVdJMvjRoDSTifdyDnRoxZpvanoXBZAb5ytvgep3QvHz1E4WQ1wyQt2DntVtQCAQWeQ98PW8meBHmEtK2E",
  "key11": "5Z4hk2EKSDLGTZS5vGU3uTwJKjePnQyticQfMrh6wf671RAbgBfzCu1B41JE6ZBr62iWaj3w1cGyEGvy2Ac53tKZ",
  "key12": "3AexyUC9ki9PHq5RZHZn3dNfp41aXNDA7fhFt36fR1qwdm5q5Wedg5tMFnnvECxedTUFobgbXmhweq6ZFCrLcg57",
  "key13": "JovHTuqgRy9tszvsqoTUaR5LJ9QWbKdchBA7SCnpv7tuwo6xZA4H8KCQhXSFSZEdjoBeSpKWqqxotepJUwARTt8",
  "key14": "3j3Kis53EKq8NtB8t2nrywwn5Z45umLJj1ccPEcvVTt6qD4Fzxx5TjbC1gNhjkZdwKFmVRe5zx8n6TTueQXWcYbx",
  "key15": "L6JJE8yajBTNZch1na4CXgMxG6koWcCEG35ESh2aUd3dRAumebPL692LABRQaerMWo8BYjCbtmbQf79D2NXm32n",
  "key16": "547jUyfPBAFJYgUoSvu6bgnJKZSe7q225V8LRYEDnkjzEbugmkEmL12rRozVgw8bPbFrRhiNwk7GSS6HeFDPvKV5",
  "key17": "2SU3gwj5dP6jC54ytDTxp19LKheEJC64tkH4XgcXQmQ9WsqKKzvCyyRtndfsG2sq77fLrtt4rAgXuoPe5R4Me4Cn",
  "key18": "4CEMoXg4jpy9NbSccK62jcnYu4p4RbjsQV9Dg2D7XBrmi5b2LUN5WYctu1nc66HzqVK1rB5q7hMP8ieuMu5dvZAu",
  "key19": "nEYQy2E8Gbbb1VMwgDNs8tCEdGth7nwSVdKNqR27euS7Yh56DycfcHcx3qsRwd4HATTAAzeJ1rYPMW8r9nNH6JA",
  "key20": "6YTNLEykw7khQHseFeGF58ABvNx8bmeRVJvLSt5qG1rXqWznAMvq15XB6Uuhi6bHRCm5axMJTYCeowhNLTjVjEd",
  "key21": "2fYJ3tWVzyw7XG3t5QXxSg8efnq6Sp28a4F3pV2se1eeefFNJLmbRvoRtXZdLhetbCYAnM6K3ZneJvMhMjgW4X9k",
  "key22": "2kQpWWbiRmmmS2YeCDbpQd2XDx1y62uC8gD8E9mT993KTa1ypnG9wNrmmzo4Z62LrJxY6sR9WESxQ7HbWYufbkqK",
  "key23": "wqSZhWtLSn5FtqLsDeLKS1DShJSd8Kna2tjuK3NocjzPoMWqf9iEB8ap75ws1F84iCxAwtd6xMJULhb2L257X41",
  "key24": "3mL7rsREZ8XmQ3BkR2NoDVGNPYwx7Mjvcff9RL57xXDNApp7wNpott8y54Mnzkpcw9JrMTgqk4peVjJb2aQVjtjX",
  "key25": "6Gq85PeCZh3MijH8uYbpPnQ5QKRnqsxH7LXRG11okA23XeK6NTH3eGwMMXepk588fBZc7hcFcP1vwS5M47jVJ3W",
  "key26": "4ahFca9sd7n842bsTercGgEfYEEPqxofmiGkuCd8WyJmKrjjW2bAhxj29QYs9gagWrvwXN2NHrEJ6EmfWucjdMmC",
  "key27": "Pa5iCgkVVyjUT3YqcYs4oLre7ZaichmyVEYUZSQGWVBTCT24yBCcediUSgjLqbGMjn3JT7YHGQfdpyus1im4eit",
  "key28": "2qvwXdBT4JGeaH73rVwGJz7T6NDEFCubutGGiMtdBZRwCqF2nRe4gdDCas5bv3JND1nJwonUbDhsnVfqZD9GhnkR",
  "key29": "31Jhy3VcXaCxnhfnwnZiX6em2UYJWiJv9qkFLnERQPmHVe6y92FhjAkdBTksrrWdUeBQW72PHvAzGobAJRgPFSdL",
  "key30": "3wNQN9VWSr8Asm4pedbU48NctbCHSSvnJ6fonztxb85LbuX8oTXtdBoqfWBq6CdyPCP4DbFQwx4CgyisQphhREvw",
  "key31": "5zWahBzdohGFT8JKQDjphX49YXouXU5ViKNEKVVDSLLuc19s5b69zR7Ygkh9X3tLApCfSgxbr1i4qG98XEUtJB1M",
  "key32": "4eyM1i4GVsX6PB53wdNi1ZZLHAGUN1uBUHmKMTL72vwrjUsjCUSrdLHEKZdhdmCvLsWF9bYUnPqY6iU6sHBMZ8vH",
  "key33": "47QLt7KXx2i6Xu4PDGTMuXNTDMfoeJWaGiq8Rdp3TuhKk9r4mPsDN3zSx19fKRmkgvNnNsTeiYNhof6sUZ5GJTM1",
  "key34": "6Wm75sztLxt7t9mRbVMf4x82YLYYu1xkCKmgCBCeLcPv7e7yZzj9f3qjRJwvQxFdShVfvX5Xe41okT4GwJRfGXo",
  "key35": "JNTGEY1kCio8CNqFnhx45RbpkvcYFVhVXYnkxq5mz6Pu1qzxeugHoemzMpQsyS9Zx6PZ93XGZhiaQYcy7QEmpXG"
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
