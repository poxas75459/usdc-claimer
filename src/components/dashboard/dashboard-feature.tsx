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
    "i6jwyDVuc9ao3BoAoiJTCAUB3UP3je3tbtK5AjhMzrRrty2srCpMNugopr6DiktJtcyLgWixsPcz9UB4ZZvbvrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uPYp2GGctd8G1Y7K9SHmo2visTRuwppgkWWPAMTkHG7HdEsmMrChUZSZaKn5VAiGm8RDfzLWPv12M5A8DkHm9h5",
  "key1": "4E8bTNbks8rCjUPL3vF3LQ8m7XbqARpX7cp2Jy7hy49HkpM5QqSCJh769k44RqV7US3e6WetWQThxn1HxAvQD5du",
  "key2": "3hSjtoWCBUqQEAjWXwZiwcKemVkp9zsRbr8XVPdgdzLEBgk22h5awUr8ABc17znpWJVFtkCRs2coKAc7GWbRfHCB",
  "key3": "N8Qy7e5QAawoi2VSfBYzdoHduvcCrui1QbnUCvukqn8wscr8eQm8TBSmTwCozrg9Gfd6GGtCLVmPkexwFsCDAZh",
  "key4": "2wUtX7cni847LE37v8j7oqK9x1aFcx1ADTvgpNoSmZA7bKoispCFiP4MW2pkkTSC6mnSywanJwQ6bhukvwJVaTzU",
  "key5": "UbYHQ3KBs7dvUYomibPf8wFV4pjkR6A1n64WLPfHUuHDMbbPdKpf2UebPLr8LDoawW2kXAJwqAvT7hpi1q2M8kH",
  "key6": "5uksSkg8X1ntNK1VM5nqGqPZSRiyge7vasyRnyopW5MSrFkqTKTb94BEn5XqMYKHPQNTRMJUdjja9EimbFbnAAmF",
  "key7": "5U1Diu6S6kNrPpUDQvY93MWTauW91aB3kcApuPqTFMdh5UpFaY9Ur6rViwsRRRWhuASWLzuf7Tq3bHfkwr7TeyY8",
  "key8": "57Sqq8ZQT3etuJjQ913bLHMWiS6XUSZD28XbRpKtY52VuhKFvAuX5XLyg2yFq1LHycu5qtpEntTNLwKvfuTwvhfb",
  "key9": "3rHfAMer5v4gwTYXSnUhr7FdXL1EfnDKVLp7goEnrRWiWCCbZACbiN3NXU7MHtUk6B95GJWzZfE2Wggpgm3kfj2q",
  "key10": "gAByXWcckJYdKAwiHNTSWuzFd2C2SnZC3aPC41jFqt3XttVDgxMxZoLTHNtjF1sUD82bxeL9QdkfNWuSaootfP1",
  "key11": "2hPzzGW1WqSKNwCNbB3YddJJ9PafCGKZLyg8Hjhc63eFEReeNEXiYfJtgoakGeVsKtp2PYCvRZXbN3dM1zYm9REX",
  "key12": "3RM48YPuEkH5eMEhBNwnB2MWPFJkf9ScuHEofZX1AV9idnGQm5sKHHvspbu1wSMddeTK6H4zXVBthVExA4F2Ukat",
  "key13": "2pQV6r7ApRStJtMyedqcvsV7yKnaFDRZaNsUiD7uf99JT5TL4whzrZVPK1gvRuhj49sgmPMa9WAq7sn1HbQZ26C6",
  "key14": "2dBenfKRggsvQjTgt7rVztrawXd6mSVqa6taJe6ZuPJezn9uzwkXqKwuodj1Dn9sRzKWDyrBJShpne1u9gUZzofe",
  "key15": "3cf88qkL8EvjXsRTajD54Q9koa2hhXF5mZRjwwoxPQhfwL81a8cwWvsrCPhsjLTecNJaDjKYiZzDiDwVD1wsaa4W",
  "key16": "7qRTBwDeG9rirW2QVcPUQh8cnonjwwdGdeMMsp8wfQRnptBgzRnfm82F8JQFf1K7KbZ2B6NwMLprcTwxPArBX1q",
  "key17": "2u3yKTNfrcxsVoGdWm6RVQj8JyBBjaHsF6QLBHXpzWArQADtWbmaMxe1CmjTv5eksjgj4mnPHMoZFUY9STj5XDZp",
  "key18": "2ifqPfwPdHhhnJSndTEA152ZW86s4hGBJ6ruvHp9zt669h6b1TtciDkFwUGREDNFth3wm8B8AS6An6EjLHvRSBGd",
  "key19": "619nYuhQXwL5BtWRx9SwDAfrgaSSbDR2A5NQziZ7cKSo8dkKVGadnb3fv9LAAYtMLipyuv2QLNHkwM9Bkk7euceq",
  "key20": "31gyDGiKqMBpgRYq5a9y3S5a2wzY6mgdAgbMgzXi5Ns71jLdehVfGuYgRy9Xo5ktVHXv8XYF46KU5d9CQmenA5ZJ",
  "key21": "4HDHCfo2LaT5Y9jodAMYkogDdTA7aVg28N1DFHhQQPcDUxZSvhnVtG17ve7WkYGgxxNd7DTzi5UByqazQrh8UFDJ",
  "key22": "4hSKf1GqcMhTd4t9Lmxk8jQuwBX4H9YgY4Eb78L97Z22EyT5Cdvm7d6NdfEqKiaBgWNzQzBsg9eemyai7pjewpAt",
  "key23": "63jad9HB1juJytAsemhp3m6vPmihXNwUhTTyjtCQwcXQmK7yTtyr2o4uyf9G1HJCjVLWYzzEenrUFsFLurs47Z41",
  "key24": "3hpVR89AsjsSwYv5HRr3shEVKzjs8h5ahhyi2sVuDS4WvGKztQYfxk9pttGLx38u4FUen68ou1TyTwUXjpuR6Fqa",
  "key25": "4KCMymN93WMT2TBQG1Ss7zatVMiVYVGyQkTeUHbWASKCXsD9YstW7HWo2Pr11UQfcYS1ZwpEshn7kbB5jFgxRR4",
  "key26": "2BzQAk4WckJZsJUSZ38rqbxZTJvU2Mtctx6ccYcMWQ2jqL168EAbFQU7V4LoH9cNMkoQCBaDvMCfSZceykn5NfJU",
  "key27": "3dU2n4bfRztPkRyyD5ixsxU54knG3WiWAiSGCUkXw7gub4k96gM6V2fGB7cHJJzPvuGhFPbnJwTuMyEmFAXSuRxk",
  "key28": "2AQj4SrL5Kxdk9NgQXhpvWTai1pvqd4eSuyFyeXAXENkxZ9iLdutkoMt2zmVG9PXe77WZX5mN2N8QGVjADdyXnNy",
  "key29": "2pKeyMwDSagT7EAZj1MrKG52XnG8uhwbfgDUdqB4oE8GBKWhZC2muGq1BqrV3vykM9DhSG8szH735fYwcp7P6tY6",
  "key30": "27KwjwwKaYEmSSYybXeauJd8Wj8TrKuDecZh2uCfcePwk2zcNzXPcFgPH3t6WBngrhsj9n9mukHoZtmGJjrcxDMh",
  "key31": "z9CHVvdZDuHwVi7uDpg5mHDKx71x287Zr3YmcLiC3HYWvkBenJvMAHef2Edibm4gRqPw6Kzj9gC4zfMVy7NAY2W",
  "key32": "5DmQaJaa5recA173UH8DykWBHMx5ELCSB9Zv8i7pz6EEb21v1eafrM93mwyMKQwCq8Su8zPSKLBHg7Sj1BAKuwgX",
  "key33": "3wXj7Cf2w4Pmm1iqKkBnq9Cz7bxuhX2nGuCSPCfZ2eReXQ9AsyKa4PzPB4BoGx93qZUj1QytMBViS68wWSroQhUo",
  "key34": "3eHHr16sS7MEDjTsXjonak1hBaZqfAfWoAF5ZRvcUb3mMPgkHA8TyurjwPBbBHoZBe3gnR6R8j4pcMYAmUZc3V8x"
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
