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
    "4mH7q4NoGYXC6Ya92RzwELNvKYkDoDXey3tTfJL366Wcu3zCySbLVb94rTDd7Mn1QxxAHYkny7BKej3JR5LwhmMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SaWRvLUT1PA7Lc4YoXbDC5F6BmuzL5EXNFNF4eyncMCJ74kDDqekfos8h3JSj8kzNXURayCmhsgqzDQvRKJDnSk",
  "key1": "3hbewpSVo6tzRAzz61kNHdGvxeN52KBnBkaJ2U5fT3QByUtAaC6UznLRHn4HzXV9APtL4Xp9PMdi77R8628WcHxW",
  "key2": "3jw3HBQLxYYbZSggsNztzZLSnqYp67sYyyjx9DUtJpPLuUnbay1jmUSmmfwLqHoCw4FV5kbhBV1zCahxseCQybLo",
  "key3": "3wTvoSseDPBLwpJfJFf1GKfBrcrMYFWHyGaUXciLXxng6SU4trxAdmQk1P49U1qBYr3quZp8UPapDGCcT2Se7CiD",
  "key4": "3KHM7hdH1MDiGKqLCsnZ2DwwRd49hkL3Vm4SeDaPuoFbaKbEp5r2tsVrTF25Qq361us8rhuVUqxMqNd3o4qTWJ6J",
  "key5": "5MHwwpRhE4kxzqxhJwvByuJeEckAikd486M6dNSyEHJHhmHDSapNjLHmK5CShv1xNE7UxiwgtzRaEXbRoyMMFw9n",
  "key6": "3KhukSuu17fNBGoL2K4DiJ8e3xTCrMV3Xt79y1HG5vtxWPXDDd4vEsxWvJ1q8GbXYB7yZNCTsrwYhSoFNR1hjdNt",
  "key7": "3LfhtxCodSDXu5HQ8si63avSaiJst3fPRevncWFVaMXVBRjc6HDztgm35UqVcLFipt5GSgbBqMvArp1Q6s3oJ4gA",
  "key8": "2r1LnoCz1wxzJSFTKASA1S3jy61uyWG9MpCPRfE9JmqdSRDx1DnyBsDhhHCfm4eN333jDvk9Cqy4sbJjdkh3n9ms",
  "key9": "4SXxyozuwerGsrPReDsugyw26PTYAasaPdFxJV2GBdzReiJMAAAPWixKpRiveYPTGMWzfhpLBnyDEJ8wfiTyxmBa",
  "key10": "4TAudVJ2PpMKcqfvYzHivhw25VHY5H9E9SGu69vpBhRDmaUXXh4MSR9BcCN3U8URSqQP9L95psaNt8uvQwEJw7K5",
  "key11": "39MU8fgTjy8CZPUNkKegkXNymM4UCM9Nu9iBUZKfXuKenjibYsAdHFXXgv7g19psuw5395aXDKxfYBzVNct28XNW",
  "key12": "5ggsZtthE4S6nvPwmVGpTniKdyeJzAvxfmniwhr1uTPCS6DFut7vxuyJB8j2HS6UGvaPsDXGdxHtWtaiBvsTqJTY",
  "key13": "3B4agCsaG5vxXZGHryRbWTTF3KoGMufdEMPLh9rtJN5X3d4EwexiSxZQaszYmtS1rPWBe9KJVcX29TPtuxiQyuRc",
  "key14": "5CJxXcNx2YNz5BNPAAoKjXvKBXrPjbsbapMduDvDFhLcY6xMN4Z6hMf2TregBRs9aHgQdHr6pbktLFehjmM8WE6X",
  "key15": "53t3aj3Ueu4jzV18QK4DRLnZ1AzH5ANXFDniRWWbCmn2RkdvPqh2UNys4XvSHtvBRbLxzD9yiruthFab1f7i4Mzn",
  "key16": "5z54jhzB4KE8bk6kpnWYouQpBHTLthAb9hoRc86dfECa1cCJfQZYRv1VCg4sLo1ydApPRiyYuadZfdmxr3DohBB",
  "key17": "2BcBTtN2wn8Y1gCk9DD9Rj9Kgxuihac1L9YHjH5oXWfuPYHsUX6mwKKCX3obNLKoFTpWeFiWSvWo6kweomivgdRU",
  "key18": "4GtcAu6aJxJvLGaEfKKYFgjJJFJ1ToW24Hq9XiYEPAvEcRD9MGmFKDRiLi1qRhHf4RswnhiPEkHbpiBUY1py48yQ",
  "key19": "kbBkx3i8nWWpCqcndcqYASd3EZXoH1VaUjgFADGNxwTqj3x8ndaJa3MV1uVcehCjcGkfcL9JbuK98DUWqK8kWV9",
  "key20": "FUSK6JeZBcqfG5VjVJ8nSpUd9hjbeyjZYzYTDUZsWkim74ya99kjUPCMYr8rSHLPW1qZYJ3ZCKaURtYofw7RKBv",
  "key21": "jHSXCPY9SdmqpvDUkFxXKCsg1diE93NKmxEWmjfRUhsVCt7VF2NtSeJpRdieLSSC9PqacP5RWWaLMnSjCnr52N6",
  "key22": "3rpSqdhcic8mBXtcaQw9ScoKKgLBLThVtZwjYYcvZzMP9vmbXXJgA2SmzeQ2SgRHArmB9cFLz2CmR3aXCDTFqMs2",
  "key23": "667sntGa6vuadVyg6BddMRXRcQQbrzBTg4aBgjYsnrCtswwigypnb9cVhw6fUbNTi8r4oUaAXFr3CaMWh41dcbxt",
  "key24": "4m1pdUYo9HJBazE1nm3SKSxYEG11ZNGew1NVr6mnLEopsWDhBEmcss27EyxPgJNYmSpZbDPHfLkW1kfBoZrn7UT3",
  "key25": "aaJqpdv9Qy1BJbscuqdpJkccjgykvwzRnssKcd9K3TwfgkxUHfeiAroiqAnGd8zfKC3jKkGgYx3bGoyMXsuXfqu",
  "key26": "2UVTtfHarB6d8AR57WBedgmRULLZ1iDvPkp4e8KhppbrDkQPShZWEkrb322UB17Me9Dh2XHrH251PZFCTJmnS7Q4",
  "key27": "3ZdpxdMUoq78GvkZB3F7ZiPJZZUWRD6iFPbu1EQVhfWSms44kdwApF8t8CDmdr2Xx21qLKYTAGwpQ1Z4nRQNJv4G",
  "key28": "4Z13jgRMtqLedLHoT5T7BJL68FF3t2L6qXyoFojeG9BhbsFa3dCtyf8M3jv3QnPxMmDVy8j5sn9EEaz71So5xRD6",
  "key29": "3WXEyq6cTjwCerYMbyzW24TGAz4FNp51evBM6uZRAUTGTHeyhn4pQxfTR4e48N2fWXGwt1aDXVimXhyMonqQFjtX",
  "key30": "5RHojUiNyLhZU66B121mqT5uGg6en1mTbXYFwWS9vdPJwZPRPksRHxBFkpVBMiqsLULW1DdB59xATQV5heWtwLTW",
  "key31": "586fUqNsDqYdijm6VFzZifhRc5ApaPnpPkricmp49AkWv2FRqWMvi1C9DYdCtYHZBpkjSnuVJRWUGxqfGiiW5mvh",
  "key32": "S7Gkp2WAkJu1bN2JkghK9RYNr6ZKNN7vyoYhLovFucDDBf88zZF6osymoRAbhESJVKog62TMoE2fjDFFQZDpL7k",
  "key33": "5Bs2wZ9Jf9EuPBqwvXpoHXnDsD52vbTLzpoKDUFaTK7hEectKUQyGxcMm317eXkWUvdXfgsiqKRqPL7Wi1MFJeu1",
  "key34": "2eN9wTtJZPVALPDegJoT6xk32JZakj18rvPZ86UL6BdiCG2eGDgHLVtNmJZd1Q4mHeNX1jZ8bNkkVuutZEewBY8h",
  "key35": "3TH1cNeNo8dYWb8Lhtrdp9fJfegPXww6QLJpWeg174sbTL6XiQkv9Y4ruLkJrqcTroDQj9kfnhCR9i4sWzUc54H1",
  "key36": "oPqk3ZKhFbVZaacCgSt3PddtGAWscjeNEyVqMzhbWP2pJCBokQC9DUhqZne5hvY3XR5fqFU3KkLccHUqguCqFfA",
  "key37": "2MFMcnEepMaWo5po5fdk2Z4FpspbpejWmDygjNWeVngizVu7Ytfyijv2QYgArkxJvASRLr5S6zPXT5FzpzCBvnta",
  "key38": "3FdL3jVXxJTQq9skNFuKx7GowVQADDDygoY6BXQBSpmGwcQtFrvZfE1MDFadYpdHwxikxYfS72QQyqDx7sAyskyi",
  "key39": "22HEdn3UArmVRqm6c2icS12TPLcwth2EWN8sdW21vsTii3SFxoZhxVTCLb62DuF9s745XvJ5nHQ1PbPAgamxNKCe",
  "key40": "5YR15n6AzS67EdWPz2QcvyyfvJAdtoATc6gzkuHCTtK1oEtrkZZZ1ZXa2r5ZKMzks5W5jUb7CFmkuB5kPV6BL1Z6",
  "key41": "4PUuXxLgBSquTHSQVPmyL8PDV5e3eBzdVQ2snKHmQE41wnSJNpWRr1uD1QGJv6JXgg4yNcD9S3uoYzA24pX7rbMp",
  "key42": "3QRc5mEpbP2n1CiPuE5bZvgjE9h9DtfBDE9oF4PtQ2vGLMcrn2UoUKPoyM1w6bxd7DvEamTGneuZeZm3QoDYojYz",
  "key43": "yNMkY22v5uQisqpUC9UcmQT3VpX8EEwarfDabWP39qaAh3QDhyAo8GQvQCsjyWhtkuMScpVyNWvTUqYmNhyxCjB",
  "key44": "5yZWohNSToFz8Jf2nxxejbxEQt6uD7ZWmXfxvs9BoDf43UB9vYL5g2sYTsdfF6foz6dY2KhqBHnA9Kv7tLGFSUWd",
  "key45": "2cB4vjgZDLdUaYiDj57AjjUkeVdvVQqSr5T31GJqgbzaFTb5ptqGS6rgXBUScRbReYxWXdZk2TV7UFiqTQQnxZZ1",
  "key46": "5qXtm8AWrreE2vGWvA8k3AH7EUUDivqL9H8mvf66cFAuiPkJcGdZhv5pUpLoJV5hDz1kQkZ8FFfHzLFE4ZhV21oP"
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
