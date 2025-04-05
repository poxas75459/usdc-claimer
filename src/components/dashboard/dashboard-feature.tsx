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
    "2FRJkmJfaTP95derdcx5AcdUe1WZ9io6FameS2GAxNMv4csoUpAQ6VuY53PQrjLXZurBwZGSMTEZSbzinHp8zJhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mKdGQzZmMfE1a1Yd63F1PApcCmcz19VgDndH3BTk6aZ8Bg73ZSSTnDNxSzf1GzYzShXMUALBtxnJYSCjHSPyUs1",
  "key1": "4SbSwTieN24f6JqHdtEYCb9r5nKtkbyUeUc2KTjJ6bZ8CdRtWRMhoPnN3XGjgC4oghyYRDBi8UnJRYsTVPeqyoki",
  "key2": "4neSYx7jkgSFLZnSaRnY3qKLD9z9fKavp8idxEY95xSPbuqAwKKbQfanm1kvczSR65sBrvGL7TszskemRuhyyaar",
  "key3": "vq7XxxnnUPoZpTkZjazdGECrLCu8i7tG14bdwxev5WC5Q5J2BwS9c4g3YMSbUNKikXmNGjqH2DY8nV8ueUuNT3c",
  "key4": "8yggZuG3JPqkNNseaEYbgX36n4yNmYowWYpYV4yxDxUxtuCBQbe9eWN23sUnNeE8vmare47eWexR1ZN2xTfccDw",
  "key5": "5zRMYiiCUAKoU49JJ1fTGAD3V3SzsLXtq2mgHHeDt8WvLyGpP3ybpXja7wfJoEhjXjKdgoMJmih333Rr1ggKs92y",
  "key6": "URHJ7dVXqwACYgBxDXRhpX88KExNsHWG9Np8oWvC5XDfxgtpcLheUzrpHgsBZdChM9F1nCL5NJSHnTMEbj7PC9p",
  "key7": "5UCypLkJxd3n73dXZFFgq8DWChAmBmN6ZyY7uzqiCQLCHh6WSots4hasgERbNwoKrrmWTcRgkH4seDjHG8RkYPBU",
  "key8": "631KvA9QHcvRCX1aTP5N6Qv2mbfZipF2Ns7MknP5zpDELVUoUdXMd9crcd7RWnRJ24ZWzDJGC3i3oXW6VWw9ez58",
  "key9": "3QKFQLYUkpuZEj3ApVaQTWzxScLSrsQynyNgbwTxfjonJFF8FGHMPg8jrxZrANZFgeB3StcRtsoA7Epm7YzTg1Ab",
  "key10": "o8baEDLN8YQuqbD7hodeAcrMUNdv9cvmWUbSFSk2X4RmDBFs2J62cv7Z9atZsutg83BdTHRTXJPcSERVZfwQWQw",
  "key11": "3X7QH6Jwxjh7PHniFw8cQQ9RKZWX9EHcq7GhxstpdmnRLcQf9Y5btvFqgbkqZvYYLtbf66dwf5zmErPv4ja2S36o",
  "key12": "4HVfSA9FPLbC3G4LxJbTzxh43EyDNG5ozATGg1mniEwgVnsCa8fm88sn1tHteyiauEhNNrWWsujRNuEMPU7GbBB2",
  "key13": "3ZDFWhRVQ9r6Q1dRaKJicHygpat24yxTtZfgDw7xk1qTWeSs5oWVdyHkhWb6F3cxy1nqS7wNADVJ14G2w4Dmj3gj",
  "key14": "2yAWce325JukamEpjwYRYY57fgos7msHYDrkbTTafsrYiNefmMb4Q7TaDKSTu7QZww1mRdczw4vxBEmwUqjde16S",
  "key15": "Bx6zoyUA7QWG5j4KMD6vqsQxvpEHubL8WABmZffUwfeP3jsgx5Pknv86SWCaQJNtGZGwLq4Eais43TSwCc35B4X",
  "key16": "2qPdE4wWdieqiLrsitpAsviA5bw7urbaCspjTDewqLg74o7JcUPUy6AqqRG7fpVSC2byEg8x3epHAnaQhtiPRLzM",
  "key17": "46PFRexiE6mFTZk3HoYuYZsG2R1MSNvYHZQGtWHwSGFhTH6aLcDowKsuVqQKYSHn4rhUWNjkPJPYJuLsgJLM1Nyh",
  "key18": "5uQCo2A6bTohT3UCbGuAGG69jpmDxxok6RUHTKig8tn4p8fSDeTmoxDE4Xk6aDMMLgJgngKK2CSh9KyqgJd9WdLK",
  "key19": "2pS2wcjcriEQUfH2pYzhZPSEhAzXhkRopnaoxcGSMNNkP8NHcK6VGvtByQ7haSfc6ksCSrZpNt3bqX68kX8u3Bph",
  "key20": "3ap3GoLbfYX5dN4QMwiEjjtjwwD5ZFM4KcKW14Vvq7ANZht4XiLf8AGXrRNbTbT7yBuv4F2R5VAkLDGcH6d82Bry",
  "key21": "2Yxmocvg9qASyZYbacKpAuyoLeCDFdJZAVYbEx95YoX2UFwgG3n8ZyjtM6HT7iFuswGYLXyrzVxhBg55eDpKvvNd",
  "key22": "NRkDTqSEmbvkqacF8mRMKLMw58Ld9P6ruJh9QvL6QGhVwEL7PBnvmPs5ZaKc3WFzGgEieijWA4yNaNSdgq8FZgx",
  "key23": "PKWKs82ksy6xHxfLUGu8wYvPHLYbtAbad2j7ExZbEvUpwjWoDWcZNBCohTRtDfMc3DzAAg3m6Mhu6LuJXv55qJ3",
  "key24": "3tFtY3SCxSd4kb64msoVqVxX2Hh5JoZyBm6MY86qCUiAb3ytp8EQXJqfNnEiMKHtbAp3LQDr3G8EePceFmEiGKbt",
  "key25": "5YGzvjw7UnRuZTPc4kHvBnzUXnTsTKUAezrj8aQsP4xGCxuSroSbH9j4YELEBt6ZJHUeDJ5mSffAG34TWBZw4cDq",
  "key26": "5L5RrP2vTXRGspVfvBigVGM9b4c3jwUAUNxtVTWyxuAiJHP4FhsoAEB9giYLGB72UZ13yCeVS64G31mThK6kHC8t",
  "key27": "4VyzR6KA7j1RDKJ2NM1SGUM2mCyrkguvVSoLo3pEDJqmLKmWS5qJyX37L5z3vE5cvFEW5jkZDfPGUWMczp7SLcoF",
  "key28": "2buyvzDrXD1KqYFDubh61Sgdq7YkuqtcdUQzA4KtWxRt7qhq9aFueNZdLWQqhLRG8D7gnm9XbWRrK8aqdtAo4aR9",
  "key29": "2QKz4FDbMpaKJSH32DrdCeyd9cMiXm6weTePucdEYRi27McAapMkMGzcB3US2poxCE6YjPkgDu6pE3NfJANjcWFy",
  "key30": "2srvah1vWXf154DBFTkR6beHQAACw3KLT8pHC6D7syXsUqKAqGfeqPzTgGfhU8hBcPdfQRLZLK2u1XbGGajH8bH",
  "key31": "42pvQj5Eo6xnVGjdjXorzC3WNoTU7jUjL9NEfW3LHoR1fGfLohaVtsXDPXcnUZdx1AzdwrrgHgbnFxSYxePjLKxz",
  "key32": "2FSXGWZh1EZthYjZ3pC2TNkBef2XbwyF2Qez6wBkoGBJ4mRsREkT96uE3yQcS2FaQG6XLvfxLtScVDWtWqPTs6fD",
  "key33": "4kbzjVth38fwcABWw2z24AFc9k8xYzaMnUgZtAu6Sj8NX5MB8kBx1o59pNpzna1suSTt8Jy7j57FwBwS4es1CPKr",
  "key34": "3khck1Gxu659ZEATBGL2NGQLfkotnFcBxMhT9FUxsgPLQVyWEWZHQbDZDghiKVTc1PAP1Z6cEfM7GKd84XZPKQQr",
  "key35": "4UbYpHUjztUMcS24mDMehNbmT8FKijN6ZEZM7Pb6K7bpjRKRDYQGcgNptCnXdFGWiiJjxdi8fkq8KrpnuoYrd6nJ",
  "key36": "5JuZ64SA4a72sMz9EXQnegYo4ZNJTPJ2zaAu64BBFYEZCi1bH5KkdTXrv1MS5RgskLpXC55JR12j4GkL7UanXLGx",
  "key37": "5uynPB77CzGefkuPXuqHSYcTdXBxeCACEwyJUH5oD48TdzyhXCMbbGf3kv88qknWVBHK3iYzsxwJAJEhC5xmguC4",
  "key38": "MbSTbogiN6BUUMJy84CJdzUaSKdsPa3S5sEYdwwwv5SRnYHqRvfDVq6CFqeGvkz8Qt5BYVpaQ43EnYWbBr4bETG",
  "key39": "VYMoNjceteJWKgqv9i9JujQmDeBDNq74HxpS8XWqPGJJA871tcE9vUfMZ13uTYkErH2D2u5p1WfGuT4obVvbF1C",
  "key40": "5bKEZqrbnMccJqzBo3896HDo5B8g2c6UeCbqedLiiAoN6xZ3knu9C6Xpp9VHvk16fGCyz8dcwwzyVPV8J2cUxTDd",
  "key41": "4E54kfUb6J3K4eK4drAUFWZ1wDgr3D79CSKFsvZHaa4hLiVfxtU19LNaSpAKJSDxxhXeFmL2aUh32dTTBVyNBZLc",
  "key42": "4ZWVLGvh1RCc1MkkvKJiJYLpqF4q5BJNFszReXoNguMWzQVDAwCN3pAGYjcZarAGEZscT3NgS3qWRRPPSkto1PKU",
  "key43": "4zkAW2u98jS8WZjK1Eg8SXo4HxvZsH18JDobv6z6HgLDxeFt4xQGoydbaKmnD1TvPBvwgnoef5BsApzrgssSfmAj",
  "key44": "Z7gexFVZRg6ddMSGsTW8ViaZw79cEvUhJ8yg94Lpuap1SZgE54VzbF65fYRc9677DkfQu4PJFBe41xdbfzZo5BT",
  "key45": "2CK4VDiNxfch76bKpWawMR9RZJeKy4qhhEo1yGc88hknjTxg4Bzho9JGAFykMKsY1oFNtPqXUU4DQE6b2VzFDrMy",
  "key46": "3HL9CoSTutu4ScLTBtzkhUoRE8EAcgM4udt5jD1WnNmoqevNfd6RK2rmzGUiuHZaVNGAPSmMWQjsze75A55aKpic",
  "key47": "2Szh6dqAxKWG44TKiWpDZA7qvU1TYT9TvD5yiXJmpCA39xJMjV311BepjpGHuTWxpYpL5DqrdZDB7jigw6innbap"
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
