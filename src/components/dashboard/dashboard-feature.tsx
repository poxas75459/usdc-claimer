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
    "2TzAbC2UayLRu7SvQ1K1dnMGPdrabLYV73XfeYYk6m3vchvTy2Xq2pmxFQtCCcsBcdxGg6NZz9eTkHTSUrEpXYCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1L2MdL3cPJxYKbExB6SvqgWZz3pGqusVXSydrriWWd1BbazTnjR7qRvVSjfuuScrxxiYQJEExoCSPoNdpByjjM",
  "key1": "2hV99bCyUxbUyFSXUt8JPxfuujUw3pdkDMc5Pm7ZaEKPLv4VCYqKhDkBdWAEjiVzJ2GXdbaFqTVNxrp3LwbqkTdg",
  "key2": "WMrDhQCLEsJkHtWtgfmFJqdJKG3H1VoEU6amzkQMwCqswdiac14NYpCQ2cZPkjQ23pCWoY4B7R9HKSPBBauU6VM",
  "key3": "5hANVngbd8t4GqbGzerDEdFdScQUfuZotJEvc42H8n9c4QVEVatFD1PidNSRVmjYeCywFD78ntEVexoa6GqfyTdW",
  "key4": "563sLNz8xBdpu8nkp72ucbm9y6dcvXrziQs6m5cnpVmU8erLk97cR6xSax8ru6uo7zjYmgTcr6n1chRjbwW83YxU",
  "key5": "3QrCfxUFPph2Lj9WvHnJVoeyQMHwjzY3F99RRs2D9znF23FnUm74gjLGd99z9wqpDUsWtDabh3juzbumue87X3aY",
  "key6": "2uT42MEwDdgvHWCNQi4BiHeNw325PwXyDvxUJjiPnotwpCWAdFhpH87bnKXFAkEfS3aCpore1TJyzM9hxFwnV1LK",
  "key7": "2DYxeU7MZsasvBmEh9BJXydRwox54vtNmw3h6YQ18FkYzNKPkbnQq9uQ4h4A7vLMJLEE3q8nxw6vJmLJNq1JSYAz",
  "key8": "51FKZzKu5Ucc7Ee8BzY2PQ6bxhEN3wK4KBSHm5zAKK7jfKCsnkZ7HaBV26Wu2KqcCJGwBDXc6pQndUSpaT9duBjA",
  "key9": "MGTKfGeu7Vh8tEUGcHdgWopE5rUk5aC91yBLfTST9rDwTiHr2fAyLsiPF7xmN4Qv7uQK1cfrjb7GuDXFxV2tCK8",
  "key10": "3mzXeiny3PPRr4ethpwLpgLNCXPvJiiN3AKpRqB82fa8WZhTy8czZk9tW8cj2sprqmfAXfJLQUmLhgnmiP7k6Zfu",
  "key11": "3x67soN4braSF4jrxEECySzj9AQUuxaVeCpSz1QXowFpypVac9XwmDtnRBkvRpUWbB1KWyDHxovdGFQZfmNsjsQo",
  "key12": "4kRa4GkGwdvjXUWpeaA8y7rthqFULvD3bDsPZoCGrUQ1JqJj4TPZDXFU7SBycpQGizKgZgrchNu5XTasbZHCsHez",
  "key13": "BCyYNT6JCQMJgx2QwRzdtDTV99eVYi2t62RMsxN8twkczXo2K99R3q2hrxm5oBBuac56Zqwyjx6KTbCiq5aMDL8",
  "key14": "2H1zVozSLVCYtpiFKZ4pNJFuynEtiJFTiyUMg6jmMUcQSKwhULPjLJkpTHUsBxJhVwkD56LWJJiv5wuMEXat3M4m",
  "key15": "3crbQBjZ62CNi1ZH33CV8BsrBgCbxaKLwXCgLGdUzb55PBLvasDhGYVSd7mWHrG6dfcGK4tLvg75m1ecF3Pv1YfN",
  "key16": "MJc8DVQXcZQaLzztM5po7GP7boggDcaAMAfJhUjKqZxhQmXEGtckCpFLohVRWJ239DfJoJB3kZb7fhc7VypFmtu",
  "key17": "4Yi2dpuMRN4NfKpnGHNxdnkmmKEBYFcxBHBonXbXNzvfoK1RX3TbMSxynyPeBwg6aehmp16Qd9V2LZXGCvbMWbC9",
  "key18": "4JJHgfmJzwF5JuWMimZboYpiXU5f6RXM5WGYJhedDfhSnsQTPeKVoZyGjc83Tgg1bugnJd22rgPWnAjocdY1e8ac",
  "key19": "4berhm79G9jhpvdA2ra6v7dDZ5ZeP9iqMFjvFGYhK4NWSiudAfwS2eoZ24SrzQTyRfG3PZvSRZiiKy3fbKNaKznU",
  "key20": "5vRWiJSy9mbjirRE4tTJWtAoFribwG48zF4hetMdh2YXqw8yZyuTYkhMYn3uDmCcJz45Q5HPmSuMSaPDDhpxXQe2",
  "key21": "24sCUZq3aKr2UnyxScBALHKyf7amMXPHQaU3GkQaZNjez8GKsrNgV9reRFxSZScS8zrP69t8JkkLB3duHVaWu6yo",
  "key22": "4tzEmj3S2s917S9BY2zfm5sexepkzMj2oKjfJYHbzf3bsQ2XJezrKUqQ2DaK8FizffrayAbEz7NSw5TudjDPBnWw",
  "key23": "2JPVyun9NGCxLkacBvJ3yZaLtf6B7MAREUEgr4sJZapiwzMK38xKCX34FGits1ef4ASxt1FRwjbUtQJ61SokhbyF",
  "key24": "4vsk8c8Ke2VyMNSMcK5LJg9AVMbNK39BiCrpwde6jkLKqXCLqjyk1Us2i7hp7VcbPNi4CqMfcJdxsyDVNeV3piTw",
  "key25": "5mRYYwbKuUhuPJjd8qfGZyva47z35QeJcxtrF7hCFmZ2tGoHCP8rrGPvFZcrERBFaeJFS97MLTqZdeXG1k6N5nsA",
  "key26": "2NwKBRVJpZLH5weHA3oWYKMP7kdp78CACoTATd22keVwAcAvzwyAmLc9Aw9DU1CpGHhKZroHYk1YYF9Q9usPyCX8",
  "key27": "5RSdiTovf74w4mfEmg5yty4DEJ8h2AQLHPDkK8emRimi4qqPAz1U3ZmefzB9MUNqqLxzbSBiNAMpmYhdpsPYDuwp",
  "key28": "27i3xmar24b1Cg3edn7vwNdDmPrMvyfrqSB1ekkADqnJsBB3YkmhSq6PmQThe4WMPVAJU12LeH7TKq1BwBLPNLxX",
  "key29": "8m2Bn8Zq4k6zk4ESxam2uAk3M5RKq1dkw19gVEn4heC15ZeMGrqTqEJxWhDP3KQRjD1PiWeSGCQRfdGW2sC4W9Q",
  "key30": "5ArqdeGHdUpLJF2oTj2RUT5EK3RsiDULfUytjLCKdMKQR3PZcokdpHBRkSYafyaqHah6x9rPDA1PxpQq89fw9UDo",
  "key31": "4sBgnqLmmAHEz97Pt1kcLuKJdV3NMN1J1FUc6LFiaX51c7V6aQa4RKkkRxVp9YpSZdtAKt5RYuSr44Vk2P4Psq7V",
  "key32": "wXyUExJ9yz31QTwTNWxbVfSSTy8EKFDerJ8eh7mpcMVmyh3mS7NeacZDprytQw4xnvE8SrwbqVgd4Yb7Suf4cms"
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
