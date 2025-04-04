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
    "4Gn9JYvX4meSd2smcxxTiq3vApLbJmMxqQipm9sfDNk7FcxUhFLdCPGBVQrK3LXeM3Ncow4Acgmz1gxeteLuod7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F1RmrRa5Lp9VwRoGmQFBPyypgEacgcxygnp7mEf2J9w5mMVMhWsDR6CUYokUhq7vNecRxTxUjfFdrkAz7QS6aWK",
  "key1": "3giaTFHyaTDrj97W5SSgUVnSU711SYn8erWeaw8v2HRTNuFnE2jMb9c8FFBhRaFEGMzz8tHKeR3TRRbbM2Dx9pUk",
  "key2": "4vPKThB96ebzy6yjYx5UtriJhj895Av4TUnAM3v2TZnJW1jriZn61qQcRum1yZMZkrBk6Hdc5K2gJKTSht2ukKZc",
  "key3": "2SgfD8nR6tZe82sUs4yxKDzGR8exEiTh5dPauDha1xESzVQs47TYZt3SZE73MwqSDs2X9jV6QuGQPed9WgksAY5m",
  "key4": "26vrjq1EkHwxcNV3CYmLsCx1yJoJrM2EsTrT327t3zRpKMoPabnJtrkRRG5sf9d6VtNx73pjMgdWecurUjeUqZm5",
  "key5": "5jPFkXFLDPf3BvoghSuLXGceop5sZYnTyRyf8t3LN4EjzbaVxVkwLej3rDij9Ryte8uktCqjhdaR4ToCs3xtB7jA",
  "key6": "2ZbFyhhs5iYqBjU42wB1uU2RT51J3b94zPGQDC1XCmWMnYAP1vec9XKTkQkeBbXK7MmgDhUdbcoi8EdD62rkXqSC",
  "key7": "39pZd2aPdyWF2c8D2s7NBwdztGdov2g9L2VnWGRxZ8U2Pw3FNBXyFmQZeMiRY5L9TYY1KJ9xhKotzUxUUMpgvrJX",
  "key8": "2hXJv6LtjVM2GS2Kpv6uNwXD3AdNmv7bVSh5563yTqShqxwcWk12a5bQAqUCtsNFuQhwB2DioVtCgXqrjm9u1UqY",
  "key9": "Jdrfihy2QR5KWfcnKxt1kZQMpucvVPkXPW493e79pKAXbiPkaF85WpDhj86Urig7SjBVEZ7HvLesEMHLXv22uHz",
  "key10": "M1NWnJ5TuVKi2GKo5hJMZWqAc3Ck1mYudbJNxndJ1B3Qu8n3iM8Woa6aR3KJvvCH16Fv7zvGKufAi9jeX4vZdVp",
  "key11": "Yhwk2SK5keK841RsPUmrLyVb4FH1muCWhqm1MT6EFjjHXi1g5edGWmwFjDam9XomBYgDPhCsSpLW8hc3Lkrjk4y",
  "key12": "3NNC6auW79HuQuBUvtDCBCVuKbsb2UT19A8sqRj5TWVJxx4PJDQ7QK72pqqnhtXo5HznUyJZbJEJUTSepPgsTfqD",
  "key13": "5K4FoX2X4Vod832TH17zmCmh7E1fjqzmAfhtBXfYdmRsi4UhUYbk6bGjx454WJnLJBqyDXMtQwjFi3BrZxwzH8Ns",
  "key14": "2PJdGS7JoGa4vzrBKWajS4wmRPeYvNkEZmcdhLxgum6v4awYMrqHZWGZtf5yF6N3ugZBbHSWuVNJeho54dGWqCA3",
  "key15": "5EXxMftCZiJgFcuw68TR7wMxgs1rMPQKvmevETFcPraUbt6Y3ivBRc9EiciZFhVYGXuGe98FcX6Y11wc2QrXHgZC",
  "key16": "47sbwDs25nhhLZSRi6XiXKWJd5ZnhF6g2uzGLn4EBXE6JA5mo4CvUNbyQfHRe6t9SfjmbgPhVWY8jj9yAMC1FzW9",
  "key17": "4fyD8aB4g1HrbySTyDYd92mWhAz9jdfo4mo2DrE7usBMGrwhqh67J28b43VGwHDGiPEDpwWczPmC7LErVJWdmfJz",
  "key18": "5NPKg1aykuJXi4paZdWanQLbLJUWhwCnHYz6ybjMKsreNdtRfEptXRHSzJNArfDd4HJV4VZT1AM5JtQq349Mhv2X",
  "key19": "2meWvmjwEU5dahz5E6N2SvvD8GzQiG7g3ysxemXowibEkpWKWDy6kNTUnN1VezrD5YLEKyxSEDnmTwXemdXv8EbP",
  "key20": "5gL34j4iUxyggVpavy1664Mi8jYWgU3idNTd5ST6biDbmWzg4f2eXmyg4k76gwf6WE7YGrbJH8vPjg5ehPW6r3ic",
  "key21": "2WgUwrZeP7S4JP443gxtF3XauFmScM1r4nbiHogGtHpG8PDHhptgScAeqZ1rbtjquUCh84kJecHKPD1KgKeBTqPW",
  "key22": "4iAscvZfrt6uNJYcCfFdu6oE9KCwjfogUaji9zEahBrmuxXgjvBffBneEHyubDWSoFYjqUjzdZr4r2jKFTGpcEr",
  "key23": "3maasmSWcM2bHGVrVMbM91FthTppFokePgzwQrsHTHacDMihgRFtprhsWfjhEzQXHjKEeF86FvJtta7psE8qyq4k",
  "key24": "46qqLnbphTFxs1SsXQbZfaPWpkzztXcwMQyAqaRbrYF2dPddaLUhnpXBSFeLPsg7MAcd2CHMwFaDvXc1ChsUWeH8",
  "key25": "4AVxFt8oNas9r7vXktXvB7y2bTsgs3tacivWeyamiigw4QTw5hf3BZj8WuJsvvc87b1oaZ2yy9kJBNBg4popMFhD",
  "key26": "3oWjyS8PMbCE1Pyht8KjzhA8BX4EHpG9zEwuas7XpR5UhKNDswua5pfrkjKD2pxijkMtet4YDLxrZC1Jj6oQLqcV"
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
