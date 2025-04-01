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
    "2j9sg9HQeuQvBYC21be1BmcBDLQCCNASWvyKfUsgzKZckY7iPJULvUE1Wfdf94yEk3JHofmBsbvFNToWsXxfYH7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iYjm5zWyhZdbnpqy2qNKKLaM27v9Z4DJCavFw5SXtzf62PNvfRWMR88RzWqtTXxtgKRbGwhmC7ajadtyMbkfqZz",
  "key1": "2JSLJJNBkTxYnXwD9DVAS146tB4bgKPtFUZvNE6qGbg4U1ErL6qY6nuNHqmzumDHyxgM9QR1hpfi8CoU96aLz67x",
  "key2": "4PScj4h8hbK8ayiB3g8swp2VkcSzeUmqVqJzJ7X4kYTGbxuGbe7Yo8dL7Sg75yBtagcQpceiLCgkUspx1dtUM2Cu",
  "key3": "2xy9azgdVKbccDzADUhmEdRUzDLexgzTgU5LPC8UEZRCtGfot4URMhMR7EVpAYbUP7XrSTGLnkvdaEywWMcmmNSv",
  "key4": "2HkaH3eP9SLfeYki3PTzCbbohGjH27tdCnKGa9GEX2PmvmtQLqnxwAzXHKNbRVV3aRRuEZrsNWKdpAQocCBuN1yi",
  "key5": "KxsnkbFR2qEDKVgPL19twTHj2ftdxXyjD7BHj69rmN4nwVx77pyXUsyR5uXf1KELgH9wsGbVSepuZPincGcu1jw",
  "key6": "4YZvc59tBkiAv6G3ZBBmd2HbzrHHD32FEE5cpYTotzBU821grK2GB9BfvZ3GcYRszswLBhKA1XUvBfYSrcdvxje9",
  "key7": "2HksPa3BX41vPCGjgHwJds7MEtHduQEWNrgsULATxVTyrP8EhjYdqTfc6k714B66364Dcy3pFnGUa3o9shp3mrK2",
  "key8": "2Qj5EuMqjeavKxVyubxYQtePcouZ7jWjLJ1fG17MdU6Q9Px7thUD2vfGmfQouPtxALUMKwacANX9YrmeP3DSgs9C",
  "key9": "3YS3weC3KX57W3zuHcuYSnHc76GfgprorjhE2ZBanXLgf2smx36an3mqgTTAjKrA4TbVGzi5pNjsKhVYAzTiPrAE",
  "key10": "4DnseLv3knWvXDvEiYuFAAbUyZH4Rcv9kL2akXKDFPidkPtDGQTh5hZa4XStUrkk1WnuaCvkgVfjiYPyrrG8zBxr",
  "key11": "5svcnXLNxd8LF4vAWXbs5TErFtZsgtvSR1mdvyZ3JUEgZReCasqQbVmQTAThYt43ak9884M3Smq219PUp7HbBqks",
  "key12": "2J1agPiGPTR6F5nogL9G3NqiBRkCECRfD9CCHEyBGcB9gEJ1n15Hxr86vxA6EHULPYeemfLcD3VDAjv28ZvEKyhx",
  "key13": "2T7V2zVAW7NnQWpFKKAZLvXawZkAW2D5mWY78qC7JfgYVTK2rWTCg2K4MZEFhywbCHo3DwkdvzMMscJKUAJQDHWk",
  "key14": "4RXFbWvSLWpj8LpYhp6JnTsn6TRUU6bMv3wh6og7epZi9uvB22XD2ToSYe5AtU7cALeN2zNq3A5ZbbFgstuMwd59",
  "key15": "2RkZmRtnrH6pFSyEWr2LvzvEsAKRixhE6cReMW5jdFcoTRdLi8gUN5FzPqw6fpNFkm8ueDvCf7GQL7EofWpN4Y9K",
  "key16": "3bqt9DLfUuLU9ZjKd8xP71RD9xHvaYcPhSfUoqfSEynu8bFrFYFj6iaJUNy3KFQDMrpjfJU151wfgDGDHQwspwZM",
  "key17": "3QWuTiJ1ZJU8cwc4TgpAkUsNUrnNvwRUkZPFAVyM2aaWwZJpebHqa5vt6eW2B56x89JyNbixH2bf9D5iz5vjydqz",
  "key18": "4KcJfwjSaPENpo1QYWYtZXgh6m757ojHDGVCSDNxLjinfCpZVy7JxuN4Fh94sfx39UNfYfZbxkCJEqVLW8GcGBoB",
  "key19": "SspmcoZe7Jsjqskr7Bn8LJawihYcQCy35ME51WJ6AaGLxjT3eqKskMk7m8UHiPHQthhX1cKxg8e5tEzTuHTWzZn",
  "key20": "3u1ztPfvqVntai4Jk8bURE3CQrYwSaZ9PHyYrSSVPJHTQ3wgf58Y8NsAWrxyagE2eVoUS75EL4T22zZgxFLG4iLi",
  "key21": "5igrFZctQnN4an8dHWvmmxG7jwuQuLUvsC5sn5DDpAUbGe4hfDR1NpLkcURiLgkxLJLa8d7q97PoRn6PSg6ZyFw7",
  "key22": "6VDtpPrxfXFoyZ3UCGRo55rwgeEhsBuLhB7TSc8r4TUiRB7d7KA1sgGK3ofwxFFmfNrrfgZgLXYRc4fHRWm6DMp",
  "key23": "27XRzw35L43PP43Lf4W6CbRH36gDGkxWpKyGJq3hRAAbcbMzEX8Kn3fzWbCEtSKCfTNjLuUECjbDv2CGkzqQhwSn",
  "key24": "2xV5PndRY53KighiJVoMoqdwmDUSg1F34VRKphX52rzwgj5xtuSvbQR9PCb19CUhMxp1Q575Lno75kvbbe3S5sVV",
  "key25": "A4k9qHE45dRuE5mCGfj3AVFMk75F6ejuSTEe8SAJuqMdqZjPUe3pxoFDt2U8jbLogvqgo2kt5vNzPgNxMpyRrGV",
  "key26": "37dgVuEeRP68yCaxbqwN58BK5tdAgX346yktdsj4EiRy2isTdHfviKQU6ZhPTATMoYapH88shNbHkfXi3T18TQxv",
  "key27": "4YgFDEHaYYqzLAHtcootBxVaGHpfAiTrXZseX1d8e2nDmmCDVrZh3TsSWcDQW14i2Js9i7dNZhUEVpsHeKL2ZWhp",
  "key28": "4DxLaEyV9nse64vzWCs6cR7BFwQEkF1GsQbut9NobYNbhXTvCc9KF3rAzah24QJm8wPTqttTkT6i376UPkHgxXQF",
  "key29": "3qkz88zEop3c47JfLCEUVEb8yN1FqMgN9PUNb9sMAPzZ1FbSKJGeXvmQVAj8mQvX8UFWUtaJizNRwwozrrEcFYvp"
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
