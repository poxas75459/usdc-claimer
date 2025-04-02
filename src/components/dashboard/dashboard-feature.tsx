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
    "93NSvcKAoqCpVFYChvoBcdJ53R5X412nxFkREExJGy62KPkSWR6uamw9NC2rkxBF5Fes6USZqzqVbi8tdQ3v5Ft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qVKPb56nKNGhWZ2prfgJ3RrUTsMAUhnFdy7hZo3VXyKUQ5MKKBAtWgQDu6ndFGnr1bjWDHZnVi9AtZhgjDpznFo",
  "key1": "5uwmFAjqzqDLbk3sLeuDq1r8HdmyzXNjmdMFuq9wRvHe5Q4iSzB5mU5zsrGBz2LGvMAyWx2bqyTK7z8Jmq4YZXMG",
  "key2": "32q6xRH1aQXeJPUzrMooWFMbBH5ifdxu3Ru4RKWfTSewfD2dbYHfcgofiFseHGxoLaGuSGoeQ8udRWyszpHCmuGP",
  "key3": "54273nem9WjKxsPM4p9MMREf7m7ThUyXHK2m4Cu5j9Z58jx9VrF4nZUncwMGCKf8tiHkkiWsgkgAudEsnfG6QbKi",
  "key4": "5fGz1jvQ7A3BdCboxZ9kj5eVFXVGJFMbY5px9uVHdBytmpR9NLGwwcGKkDgSMagcXKz28bQZwwnXdi4MwY5hWjQ8",
  "key5": "5GxLKYcXPKDd34KFDEk4TBg584Nska6Y8v2kBgeDNvkWELPbVUyBumfVK3cu1CaViezdn8seXqANHpQ3Esd7mMVX",
  "key6": "2N3rhvoRfGC38TTp2eoZWkw3Azukjbyp118GitUuu1zJiadbvCewMDYVvTtnQZFTPnWyVkcAn4UdTpsDn6T3PM7u",
  "key7": "5g2d4WYPmT26Y8Toza6ta6vQwaAwpKzs724YobSfMfoCV5RNidGgBtCxSBRQSJCmduZ8pZdTdRddGEqw3fyDQFz6",
  "key8": "23bk7UpQEzf2uQD2spdurqDquKPVYMCA1jTdPh8QHAat5ZWrqjU4GajVAvvCzEz3WZUoHYC9WhXbaT4MVvajV41k",
  "key9": "2emVgJgnmCtpf5JDrF9qbDER9j9t51aBDs7Z9pwGSjrbDA8wmKdY2WAsXbXrpgvw6kw7rwVLSvnugFa7CSWDwwGK",
  "key10": "3pRmeV9rcbUKVPkaMBc17BQu8T6Dm6fHmp4aZp3ioQrZoA5ghQRRSnThJS7Zq452dvyVKtMninUPYS4iUYjKEWtE",
  "key11": "2d6rCUXkqMWREid36KxrbFkuRTuq2XTX8pXLwgDnPZxvpJRtEbgUxc72Y8J9xeYj4vyyWgk4iA39rztg3qEetHG8",
  "key12": "58bbHoKersNTUXhwYif1KBqLLq7iqmy6nXvheMmHU5KskVwFR4i5xhiuYAJHVEWGhcd4s4SA3zAyWD5WNEp3DDwi",
  "key13": "35KM7SnQTb68kQujqr6BuNQgXu2GShGhm6Xp6q2pRoT1FexRjYz7kmfcM3r2U1JhmnXpfU1mbQyppmFypMczCxN",
  "key14": "4NKwZRWNXFsB3qdCNv8DbRaH1jEMegj8jPodPDzBLLpr31fqBF2GCrkJcLhRKuNoECrQZQL4LhpmQx1BJpe8BU4R",
  "key15": "2NAnAmeDYDs4vZWLV81s5YiQuY2FTr9psCc3LtDMatT6SEXt7MfP1eGXmxLMVVGV3T2xCUmoyfuwHWuKGcufENHu",
  "key16": "5qNPZx8k8RNNJK6tq42bureiFj71ZurreE9LgpmoGTTFz8pfYTQQ99kWo4uMvD8M3kKr31NvBCQUMAsiPoLLbe58",
  "key17": "3E8bTdfWZxhucFJKEstwNbriKv2Fnzc9RV2UcYphtXiqUvST7cWSmoChDyWCDpXXjUCDLu7iSD5oERPCuE1rSQ9D",
  "key18": "4aj8M8g9i46ZG6N3tZa8BevKW8i7DFZYy5yKM8nucSimU1NuWjqDCcdNiHV7bxKo5xZTtHKdaTrJmvEq99Aqb3Dh",
  "key19": "3SoH46njyi3JCp8fnsjtipyn677ZiALPbxwSpJvPE45XooTc1waxBdd5UhWpaSiMMcdZiqjokUxC3ygLU2MR1bqz",
  "key20": "3DcaLhnNFQnVuovTmQiJGGGj9NUUaNSr2Sp7K2fma5S1PHxXqLSf6h1pKi3d7YVZXUVY3qspRHXXMZzFXuesmwsn",
  "key21": "4sFwGZBdxtbRpnhBootPLuYZs1y8QSrnkUqagSzhHsF69mMtnSkv4xK7Vnaq1oRBb62Ygrfk9ZDeHoEd7rV6jyjw",
  "key22": "2uHWS89VoWrQY3Pg63tmethVH6v9MqDeKbuDT3CBtKoSoj3TMXiMyzowwP6Ht46yiEcYYiPkLXgsXRU6ZYayCSBY",
  "key23": "224CA9EzW7CSuxsiUecbKuCmqth2RLVbjyyNaep9ciraCRP4QosJv4TvQV2SjTXZUudWguBjkDui2iA9YMLg6TWn",
  "key24": "4P6Xv2Nv8FjbaNbP6bw24sJ8UXXh1eRgXRh1rZ2siNYUBpfo7M9G95WXGWivqRh74w5shkUDfkXLdXzr95kX3nib",
  "key25": "Q2dZytjHovLLAmNbJkmJuCzva3CSHEvsLf5KX22gmK1ePJqLdYB6rVNRbXEzSarcBXRHoaE7DzeFfV7VXgJXj7h",
  "key26": "5p5Fg32orKqqPNiaz5gXmUSuJdC6tWRU37UrR5svvopS1XzMSCCgesEiHixyrhmnU31QLt36Dmkb2B4AsQrX5H3U",
  "key27": "4rmk68g13LNHJkZ6ayobh7V43gVa5joMxeYqtSVaKVbKCPLA2utzjPLLYHLQY9WPwhkNtoQy1sfRcvixjn2zzduU",
  "key28": "2DY9nyhiQNjNRAxDSsJkR4CJxMupfan9LrN7NTofU1dsPStjdHNPXLNhKHduo4eEyeECV3sMEK5ugT8cAUHsmYS3"
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
