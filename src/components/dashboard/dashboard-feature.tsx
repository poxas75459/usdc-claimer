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
    "4NM66HkffFwvR1HCT1KYqHtowe2vb8sBkrRNooVUpyq5ejRiwz2VJNNDpsh6KwwnHZA1SvZHxUnYLksWQGeMxsHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mQ7o4ucziRzB5TU3FwZdEz3t2hhMWQxSXBNZQM8yySX15uC5uqMvG7zYZdF4Rh89UcFiyZ85NsZzBZqpUrSEHLN",
  "key1": "3kvi83AGUfga2TkWKaQkT39U2FXgsJZVL5YVkiY6mYZZoQTcEwatWrK4rSLSGtckMHp5zTpFeh6k5LWWzu19Lf2F",
  "key2": "2p7YMTQ3GtLBfxvLzbn1Hn3hb6jEE5LkRaRoYQVJCRd5YF7fTRE1s85dNeQvZefxFkU7eB54dDsVKxQQDbRVcRtD",
  "key3": "5KAdPBRyTzsVivL8aYf6mciAnWBZ35kEaaGR1iPBCDLMaejvNMyUqntuzgaMqA1CUyQyTss2j2QvPbj31A3m7YMs",
  "key4": "fJMoyPr8PZqLncicZ5yEdA1VhB5H7bEvVdG2G4PLEzdNvnaK7G19vRDQgmCgNnwMTTCKnjHoyPu9rNUQmvCweTR",
  "key5": "SbBN9nqBKBkyMufqxHmwTh7wjn4swBontQGrniq6MYN5GC1obsFNs3cu7KW4WB7xXD5wKv9NuwsE753vr4kWp6b",
  "key6": "2Ugs1hV5gTVDNHbfe1xZ1pZFLh8TgHSQRPukA9ZVBYYYnbUDQjnTcdwg9ZZRaYnE7V8b85LvQtUj8UawmWERd4PK",
  "key7": "3nanHQ7DFnyz5vbEfZgkmQhsySyHDRQdnwTeWEyWftxAXFnKY6n5A1j8JBHDeLxESF9i69WdBXt4VKR1qm2ykxvm",
  "key8": "4KzGYgDRqku7HxizYN9YqNQvrTyoZQexp5E634mfPiXZvWdy5x2DkSs3Jwh6a7cpNtAsZjw4hafWniQdi9zmJDFh",
  "key9": "5mQnyy3qK3bntG7bdkSuqqSkoUW9Xo313usa8iwzpMbuibMW1sBpiC18kewKNdDdg1AXXQVg6gyGGFxc3EnLEARF",
  "key10": "rwSKJfeZVHvoyFHJDy96RDky7PEYaeZzcz7Zvfo1ZQTXaG9r8G29rJXKUjkWTi1qbuxfP879ELjp7CHaatv9kNb",
  "key11": "3fo88iZM1dVefxz1akYwLHc5QFGPSWXvCknb8NbQmzYqmDQpkj9qgXrF6vhQuF3ocuEWtuy9BgBjD9yMBvUumJR7",
  "key12": "2LSbsohnKcDsTbBaCfP7FtnEWFUzLFWToX4sTEVB6kZpZLgvYzapmTb7okeCXQyUgwMhRa62XnGC38S1sQefP2YZ",
  "key13": "syg5jXm7thStL9YTC5VNvZqBgBDkxHoQbzePJh9HdCrmhLmPt1Nn8Z9RMuTNAme5yxaQTknMVqT5PmDQz2Efvep",
  "key14": "64MMWD6ujuoTB1op3SjNXPp5han2nms2DjUfCN74ni1BLL5HCNgT4LhiymoWWQF74PaEASxsqDynsPnZfAxofRBa",
  "key15": "5JECtJ4muK9MYPx5HJGZ8HpT8VqFCfJoisCwSkv623od7xLNEhLU6UTT7fzLZ5Bi6L2HcLCz9dfvtragn4uy5Vck",
  "key16": "2pY6rEf13iLiVHvGD9eBXqFoHXbPK4K8uxr6Mq8YBWraB38jjLZRfQSYHoPaTXdbrsqmo8BDrRzbD5NYtPATZo5t",
  "key17": "3kKE9hZNhAdK1zwddySWffTpzWbiomh8aaQ4nj4gb7dZB4wp1FLVPvfzT5zk939TGYQxVZo6P1dM7DYSM2EtKpt2",
  "key18": "2hjUHrixohM3DPVKBFerJgvFcp6hFK9L49XnzQP3zEehsEJkeZ6Tk6tSycsYXSpwGswu8niC5PjHpnW9edynjngh",
  "key19": "4fd2Yc2xaL5ZoG5HZ1arux6zj9EZK2YHto6CsD53P96fusiBtaFfFu2pc3RsJ5TBYrAGYfMT3jpFhRCA7A7FXaZk",
  "key20": "Z32xXLfGTGwpvjBrHchfW3SXQ7eSRekmwvFpJr9eHMJZPMU1PEhTpQkz56KdozVJDY6cfq67znJGFUwpo776jYr",
  "key21": "azx9Gpw2SJSqQ2aBKqLs8camobWdV9Wb2FruqPETC9jpmiALcnJedrsZ8GrdZUQdw8QzHain3aGWuP2VwgT4sd5",
  "key22": "2yaUTUB9znrbnZqzXKpSzjruCsCBQ1NY6g5cb5eDNthTPmuSrRPiFD631RAE8uhDmLDSwmMNLnv9Ahmv31RcdV5T",
  "key23": "2xPJb3DEWJTmLsyGzrKxjphkqDTnzXijz7SmSDgVTKSxf3eFi3mDRrfyCprhFYFrP6zwpejNuYfHtaqoLNgUr7Pr",
  "key24": "5YvswSWpgQhUVxuXhSQgG6s9qZUcupcRrZEkiy6ezcfituoSBW9TQ3qWqbqDykGtf1k5L3NwrWAMRuJsg98T4pHN",
  "key25": "3nadR1DJQGM6SoTWDY42om4rAtEe8c8S55TrVrcBRbCd17a9ArVoFXdWQY2Q1ntZx3H8apAwYQActFmkBio8RVeT",
  "key26": "GWYCaSWFYDzCLkbHdYFy2QZNevrKobFFSzc9KcRg8rzGmnVakmr5PeBH3Gbt1ysGpPwZTrpj8jSXLb5MigibMsx",
  "key27": "3hKrcrR6oq5y1PskLUMJ2VWHsqhR73gouTwEDEEYi4YjqTMt77LyXZ9RoSTrc3FoTTtSCVbAdMRAcuo1yspmFq2y",
  "key28": "29yXP5zR8QL5FVT9c6mqRbavVYsxyGwnZGodHztDEVJyiRn3dKxfGQtnHRdewmwvNEqou3ZV9A64UGwKZzHEZTtw",
  "key29": "3d6wgqX6DVSzfKhnCd4tEH5S711KdBaXEuqyEkMZrZHtCbAMqsdd6UmB4FLYskn3H6R5rrRsrrHFWeWRGfWXem32",
  "key30": "3LENrGzfcRgYEppHxogV89uJ5tJZtv3Qd2YNgUrZyKivoqMHy8iJrEYZ7k26PZqoE12Puo4fHRqma99HSqunS5u2",
  "key31": "2reZgXeUVg3h4fMbCLYiBkSsNVzF15xi7ZizoUwTreFXCXDYHVbPQQJ2zRLNnM8wcdrcELvMpcr1f7Le8LRABsdg",
  "key32": "2j4D6wBgMXBg7vTVXKKzWo67FL73R6vdHUBEjUvMgsoanzCXeqyV8SSZGdScHKid5GCZtnsgPQN7TF8MHRAT3MUc",
  "key33": "4MdJ2brCPAHWDTpxLeezTuok5Q2FT1MTiv4ZabtSTsTy34i6sgE7sHDK8jsP1CsKXGopfKZoNMqr3KGVjeZBUMs5",
  "key34": "4KdskXdH58g3xCVWYTLqH9PzR92ZAbK2HHgc42FPAhfy7TTPh4fvavGykTKXrfsXRWP2dAnw6Udz5cbe9sxjF4ci",
  "key35": "5VADYhSq7VS6zsVZXZV36ZQcfpq21pCatuh6avruj9JdAfZyy94zFDD7QzWK5VEabR7TMDwxjYGbt1gSRSncn9ob",
  "key36": "5ePFzBxtxe1YtUq2wzkSTnDxHBbnWaztWMNn2jroPqcJ6KSfDwJDdwKKg2cK7kzDAnBRvjm24sh2DGiL8CedgU4H",
  "key37": "2HwppD7TZGVnRU1LaxDmJN4j8vvwTNbvsDR3XXEFYce5ScCmd2hjf1zJ3Mokqcuj35id1KgaC3fzLGLy6QAygmra",
  "key38": "4vM3NdQUvVSksoFdrG89ytqvVAxrwtW2CBsPGEYDZVGvJu3i5iGLSYaf4a6UyQpJeQK7JhXQG6TURohE5SgGHGDE",
  "key39": "5pPkdnKURseDoiPoDTiQ1s9MCUHH1mCMLVQUmyuznjWYzKsRTkMJzxUyhnVnWgSxGUe9djWeCqZyZbHy3ikHVWup"
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
